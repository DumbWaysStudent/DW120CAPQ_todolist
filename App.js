import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, InputGroup, Input, Button, Icon, Left, Body, Right } from 'native-base';
export default class App extends Component {
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

  deleteText = (text) => {
    const data_kata2 = this.state.data;
    while (data_kata2.indexOf(text) !== -1) {
      data_kata2.splice(data_kata2.indexOf(text), 1);
    }
    this.setState({
      data: data_kata2,
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
                <ListItem icon>
                  <Body>
                    <Text>{item}</Text>
                  </Body>
                  <Right>
                    <Button onPress={this.deleteText.bind(this, item)} style={{ backgroundColor: 'grey' }} >
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