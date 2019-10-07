import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, InputGroup, Input, Button, Icon, Left, Body, Right, CheckBox } from 'native-base';
import { tsThisType } from '@babel/types';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            field: "",
            data: [],
            edit: ""
        };
    }
    setText = (text) => {
        this.setState({
            field: text
        })
    }

    insertText = () => {
        const kata = this.state.field;
        const data_kata = this.state.data;

        if (this.state.edit != "") {
            const name = this.state.edit;
            const pilihan = this.search(name, this.state.data);
            const aray = this.state.data;
            aray[pilihan].name = this.state.field;
        } else {
            const objek = {};
            objek.name = kata;
            objek.status = false;
            data_kata.push(objek);

        }
        this.setState({
            data: data_kata,
            field: "",
            edit: ""
        });

    }

    deleteText = (name) => {
        const pilihan = this.search(name, this.state.data);
        this.state.data.splice(pilihan, 1);
        this.setState({
            data: this.state.data,
        });
    }

    updateChecked = (name) => {

        const pilihan = this.search(name, this.state.data);
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

    updateText = (name) => {
        this.setState({
            field: name,
            edit: name
        });

    }

    search(nameKey, myArray) {
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
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
                                    <CheckBox onPress={this.updateChecked.bind(this, item.name)} checked={item.status} />
                                    <Body>
                                        <Text>{item.name}</Text>
                                    </Body>
                                    <Right>
                                        <Button onPress={this.updateText.bind(this, item.name)}>
                                            <Icon active name="create" style={{ color: 'red' }} />
                                        </Button>
                                        <Button onPress={this.deleteText.bind(this, item.name)} style={{ backgroundColor: 'grey' }} >
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