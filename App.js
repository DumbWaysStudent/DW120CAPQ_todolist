import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class App extends Component {
    constructor() {
        super();
        this.data = [
            'work',
            'swim',
            'study',
            'sleep',
            'run'
        ];
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <List>
                        {this.data.map((item, index) => {
                            return (
                                <ListItem>
                                    <Text>{item}</Text>
                                </ListItem>)
                        })}
                    </List>
                </Content>
            </Container>
        );
    }
}