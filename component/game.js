import React, { Component } from 'react';

import { Container,Header,Content,Footer,FooterTab,Text,Button,Item,Icon,View,Fab, Input,Card, CardItem, Body,Left,Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {Ans} from '../maths/ans';
import {Maths_problems} from '../maths/data';

count=1;
const goToAbout = () => {
    Actions.home()
 }
 const goToProfile=()=>{
     Actions.profile()
 }
 var val1=0;
 var val2=0;
export default class Game extends Component {
  constructor(props){

    super(props)
   
      setInterval(() => {
       if(this.state.count>0){
        this.setState({count:this.state.count-1})
       }
        
        
      }, 1000);
     }
  componentDidMount(){
      this.setState({count:val2,qus:val1})
  }
  
 state={
   val:0,
   ans:'',
   mark:0,
   Neg_mark:0,
   count:0,
   qus:0,
   active:false
 }

fun1=(text)=>{
  this.setState({ans:text})
}
input=(a,b)=>{
    // this.setState({qus:a,count:b})
    val1=a;
    val2=b;
}
fun3=()=>{
  this.setState({val:0,mark:0,ans:''})
  setTimeout(() => {
    alert(this.state.mark)
  }, 2000); 
}
 fun=()=>{
     if(this.state.count==0){
        setTimeout(() => {
            alert("Your mark is"+this.state.mark)
    
          }, 2000);
     }
   if(this.state.val<val1){
    this.setState({val:this.state.val+1})
      if(this.state.ans==Ans[this.state.val].ans1){
        this.setState({mark:this.state.mark+1})
      }else{
        this.setState({Neg_mark:this.state.Neg_mark+1})
      }
   }else if(count==1){
    if(this.state.ans==Ans[this.state.val].ans1){
     
    }
    else{
      this.setState({Neg_mark:this.state.Neg_mark+1})
    }
      count++;
     
    
      
   }
}
  render() {
   
    
    
    return (

    <Container style={{backgroundColor: "#635DB7"}}>
      
      
      <Content style={{flex: 1}}>
      <View>
            
                      <Card >
                      <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://cdn2.iconfinder.com/data/icons/rafif-rounded-flat-vol-2/512/game-512.png'}} />
            <Body>
              <Text>{Maths_problems[this.state.val].math1} =?</Text>
              
            </Body>
            <Text style={{fontSize:20}}>   {this.state.count}</Text>
           
             
          </Left>
          </CardItem>
          <CardItem>
                        <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>{this.state.mark}</Text>
                </Button>
                <Button transparent>
                  <Icon active name="thumbs-down" />
                  <Text>{this.state.Neg_mark}</Text>
                </Button>
                <Button transparent iconLeft onPress={this.fun}>
                  <Icon active name="arrow-forward" />
                  <Text>Next</Text>
                </Button>
          
              </Left>
              </CardItem>
              <Item>
              <Input onChangeText = {this.fun1} style={{width:'100%'}} placeholder="Enter Your Answer" />
            </Item>
            <Fab
            active={this.state.active}
            direction="left"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
            
          </Card>

          
          
           
      </View>
     
     
     </Content>
     {/* <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View> */}
     <Footer>
          <FooterTab>
            <Button onPress={goToAbout}>
              <Text>Home</Text>
            </Button>
            <Button active>
              <Text>Game</Text>
            </Button>
            <Button onPress={goToProfile}>
              <Text>Profile</Text>
            </Button>
          
          </FooterTab>
        </Footer>

        </Container>  
      
   
    );
    
  }
  
}
