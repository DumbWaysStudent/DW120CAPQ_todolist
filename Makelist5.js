import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, InputGroup, Input, Button, Icon, Left, Body, Right, CheckBox } from 'native-base';
import { tsThisType } from '@babel/types';
export default class Makelist5 extends Component {
    constructor() {
        super();
        this.state = {
            field: "",
            data: [],
            edit: ""
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

        if (this.state.edit != "") {
            const id = this.state.edit;
            const pilihan = this.search(id, this.state.data);
            const aray = this.state.data;
            aray[pilihan].name = this.state.field;
        } else {
            const objek = {};
            this.hitung += 1;
            objek.id = this.hitung;
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

    deleteText = (id) => {
        const pilihan = this.search(id, this.state.data);
        this.state.data.splice(pilihan, 1);
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
        const aray = this.state.data;
        const pilihan = this.search(id, this.state.data);
        this.setState({
            field: aray[pilihan].name,
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
                                        <Text>{item.name}</Text>
                                    </Body>
                                    <Right>
                                        <Button onPress={this.updateText.bind(this, item.id)}>
                                            <Icon active name="create" style={{ color: 'red' }} />
                                        </Button>
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