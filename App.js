import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height:80, backgroundColor: 'blue'}} />
    <Text>bagus</Text>
    <Home/>
    <Text>bagus</Text>
    <Text>bagus</Text>
    <Img/>
    <TextInput style={{borderWidth: 1}} />
    <BoxGreen/>
    <Profile/>
    </View>
  );
}

const Home = ()=>{
  return <Text>bagus sanjaya</Text>;
};

const Img = ()=>{
  return <Image source={{uri:'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=1640822400&v=beta&t=4nxfYiBxLwS3Jvju_gXCwzF_sAKUF2kIPUvg5RDTlDc' }} style={{width:100, height:100}}/>;
};

class BoxGreen extends Component {
  render(){
    return <Text>Ini component dari class</Text>
  }
}

class Profile extends Component {
  render(){
    return (
      <View>
    <Image source={{uri:'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=1640822400&v=beta&t=4nxfYiBxLwS3Jvju_gXCwzF_sAKUF2kIPUvg5RDTlDc' }} style={{width:100, height:100, borderRadius: 100}}/>
    <Text style={{color: 'blue', fontSize:24}} >Ini component dari class</Text>
    </View>
    
    )
  }
}

export default App;