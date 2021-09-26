import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import shoes from './img.png';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <Styling />
      </ScrollView>
    </View>
  );
};

const Styling = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          margin: 20,
          padding: 12,
          backgroundColor: '#f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={shoes}
          style={{
            width: 188,
            height: 107,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
          }}>
          Shoes Pro 2021
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
            color: 'orange',
          }}>
          $200
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '300',
            marginTop: 16,
          }}>
          Cilegon
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 50,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'blue'}} />
      <Text>bagus</Text>
      <Home />
      <Text>bagus</Text>
      <Text>bagus</Text>
      <Img />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Home = () => {
  return <Text>bagus sanjaya</Text>;
};

const Img = () => {
  return (
    <Image
      source={{
        uri: 'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=1640822400&v=beta&t=4nxfYiBxLwS3Jvju_gXCwzF_sAKUF2kIPUvg5RDTlDc',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=1640822400&v=beta&t=4nxfYiBxLwS3Jvju_gXCwzF_sAKUF2kIPUvg5RDTlDc',
          }}
          style={{width: 100, height: 100, borderRadius: 100}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>
          Ini component dari class
        </Text>
      </View>
    );
  }
}

export default App;
