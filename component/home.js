import React, { Component } from 'react';
import { Container,ScrollableTab, Header, Card,Title,CardItem, Content, Footer,Form, Item, Input , FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Game from './game';
const goToAbout = () => {
    Actions.game()
 }
 const goToProfile=()=>{
     Actions.profile()
 }

export default class Home extends Component {
    state={
        noofqus:0,
        Seconds:0
    }
     qus=(text)=>{
        this.setState({noofqus:text})
    }
    time=(text)=>{
        this.setState({Seconds:text})
    }
    fun=()=>{
        var obj=new Game();  
        obj.input(this.state.noofqus,this.state.Seconds) 
        setTimeout(() => {
            goToAbout();
        }, 1000);  
    }
  render() {
    return (
      <Container>
        <Content style={{flex: 1}}>
        <Card transparent>
            <CardItem>
              <Body>
                <Text>
                  Before you start Game just challenge yourself...
                </Text>
              </Body>
            </CardItem>
          </Card>
        <Form style={{marginTop:50}}>
            <Item>
              <Input type="number" placeholder="How many Question" onChangeText={this.qus}/>
            </Item>
            <Item last>
              <Input placeholder="Set time in Seconds" onChangeText={this.time} />
            </Item>
            

          </Form>
          <Button style={{left:120,marginTop:50}} onPress={this.fun} >
                <Text>Start Game</Text>
            </Button>
        
        </Content>
        <Footer>
        <FooterTab>
            <Button active>
              <Text>Home</Text>
            </Button>
            <Button  onPress = {goToAbout}>
              <Text>Game</Text>
            </Button>
            <Button onPress = {goToProfile}>
              <Text>Profile</Text>
            </Button>
          
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}



