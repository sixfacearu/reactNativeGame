import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
const goToAbout = () => {
    Actions.game()
 }
 const goToHome=()=>{
    Actions.home()
}
export default class Profile extends Component {
  render() {
    return (
      <Container>
         
        <Content>
        
            <Text>This is HOME!</Text>
        
        </Content>
        <Footer>
        <FooterTab>
            <Button onPress = {goToHome}>
              <Text>Home</Text>
            </Button>
            <Button  onPress = {goToAbout}>
              <Text>Game</Text>
            </Button>
            <Button active>
              <Text>Profile</Text>
            </Button>
          
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}