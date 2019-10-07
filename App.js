import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, InputGroup, Input, Button, Icon, Left, Body, Right, CheckBox } from 'native-base';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            field: "",
            data: [],
            edit: ""
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

        if (this.state.edit != "") {
            const id = this.state.edit;
            const index = this.search(id, this.state.data);
            const state_data = this.state.data;
            state_data[index].name = this.state.field;
        } else {
            const object = {};
            this.count += 1;
            object.id = this.count;
            object.name = state_field;
            object.status = false;
            state_data.push(object);

        }
        this.setState({
            data: state_data,
            field: "",
            edit: ""
        });
    }
    deleteText = (id) => {
        const index = this.search(id, this.state.data);
        this.state.data.splice(index, 1);
        this.setState({
            data: this.state.data,
        });
    }
    updateChecked = (id) => {
        const pilihan = this.search(id, this.state.data);
        const aray = this.state.data;

        if (aray[pilihan].status == true) {
            aray[pilihan].status = false;
        } else {
            aray[pilihan].status = true;
        }

        this.setState({
            data: aray,
        });

    }
    updateText = (id) => {
        const state_data = this.state.data;
        const index = this.search(id, this.state.data);
        this.setState({
            field: state_data[index].name,
            edit: id
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
                                    <CheckBox onPress={this.updateChecked.bind(this, item.id)} checked={item.status} />
                                    <Body>
                                        <Text style={{ marginLeft: 3 }}>{item.name}</Text>
                                    </Body>
                                    <Right>
                                        <Button onPress={this.updateText.bind(this, item.id)} style={{ backgroundColor: 'white', borderRightWidth: 1, borderTopWidth: 0.5, borderBottomWidth: 1, borderColor: '#d6d7da', }}>
                                            <Icon active name="create" style={{ color: 'blue' }} />
                                        </Button>
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