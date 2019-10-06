import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, InputGroup, Input, Button, Icon, Left, Body, Right, CheckBox } from 'native-base';
export default class Makelist4 extends Component {
    constructor() {
        super();
        this.state = {
            field: "",
            data: [],
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
        const objek = {};
        objek.name = kata;
        objek.status = false;
        data_kata.push(objek);

        this.setState({
            data: data_kata,
            field: "",
        });
    }

    deleteText = (name) => {
        const pilihan = this.search(name, this.state.data);
        this.state.data.splice(pilihan, 1);
        this.setState({
            data: this.state.data,
        });
    }

    updateText = (name) => {

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
                                    <CheckBox onPress={this.updateText.bind(this, item.name)} checked={item.status} />
                                    <Body>
                                        <Text>{item.name}</Text>
                                    </Body>
                                    <Right>
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