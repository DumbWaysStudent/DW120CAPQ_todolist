import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, InputGroup, Input, Button, Icon, Left, Body, Right, CheckBox } from 'native-base';
export default class Makelist3 extends Component {
    constructor() {
        super();
        this.state = {
            field: "",
            data: []
        };
        this.hitung = 0;
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
        this.hitung += 1;
        objek.id = this.hitung;
        objek.name = kata;
        objek.status = false;
        data_kata.push(objek);

        this.setState({
            data: data_kata,
            field: "",
        });
    }

    deleteText = (id) => {
        const pilihan = this.search(id, this.state.data);
        this.state.data.splice(pilihan, 1);
        this.setState({
            data: this.state.data,
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
                                    <Body>
                                        <Text>{item.name}</Text>
                                    </Body>
                                    <Right>
                                        <Button onPress={this.deleteText.bind(this, item.id)} style={{ backgroundColor: 'grey' }} >
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