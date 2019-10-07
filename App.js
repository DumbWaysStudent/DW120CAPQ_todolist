import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, InputGroup, Input, Button, Icon, Left, Body, Right, CheckBox } from 'native-base';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            field: "",
            data: [],
        };
        this.count = 0;
    }
    setText = (text) => {
        this.setState({
            field: text
        })
    }
    insertText = () => {
        const state_field = this.state.field;
        const state_data = this.state.data;
        const object = {};
        this.count += 1;
        object.id = this.count;
        object.name = state_field;
        object.status = false;
        state_data.push(object);

        this.setState({
            data: state_data,
            field: "",
        });
    }
    deleteText = (id) => {
        const index = this.search(id, this.state.data);
        this.state.data.splice(index, 1);
        this.setState({
            data: this.state.data,
        });
    }
    updateText = (id) => {
        const index = this.search(id, this.state.data);
        const state_data = this.state.data;

        if (state_data[index].status == true) {
            state_data[index].status = false;
        } else {
            state_data[index].status = true;
        }

        this.setState({
            data: state_data,
        });

    }

    search(nameKey, myArray) {
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i].id === nameKey) {
                return i;
            }
        }
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <List>
                        <ListItem >
                            <InputGroup borderType="regular" >
                                <Input value={this.state.field} onChangeText={this.setText} placeholder="Type your text here" />
                                <Button onPress={this.insertText}><Text>ADD</Text></Button>
                            </InputGroup>
                        </ListItem>
                        {this.state.data.map((item, index) => {
                            return (
                                <ListItem icon>
                                    <CheckBox onPress={this.updateText.bind(this, item.id)} checked={item.status} />
                                    <Body>
                                        <Text style={{ marginLeft: 3 }}>{item.name}</Text>
                                    </Body>
                                    <Right>
                                        <Button onPress={this.deleteText.bind(this, item.id)} style={{ backgroundColor: 'white', borderTopWidth: 0.5, borderBottomWidth: 1, borderColor: '#d6d7da', }} >
                                            <Icon active name="trash" style={{ color: 'red' }} />
                                        </Button>
                                    </Right>
                                </ListItem>
                            )
                        })}
                    </List>
                </Content>
            </Container >
        );
    }
} 