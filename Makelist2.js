import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, InputGroup, Input, Button } from 'native-base';
export default class Makelist2 extends Component {
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
        data_kata.push(kata);
        this.setState({
            data: data_kata,
            field: "",
        });
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
                                <ListItem>
                                    <Text>{item}</Text>
                                </ListItem>)
                        })}
                    </List>
                </Content>
            </Container >
        );
    }
}