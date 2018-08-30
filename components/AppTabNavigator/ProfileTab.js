import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import {Icon, Container, Content, Header, Left, Right, Body, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';

class ProfileTab extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="person" style={{ color: tintColor}} />
        )
    }
  render() {
    return (
      <Container style={{ flex:1, backgroundColor: '#ffffff' }}>
        <Header>
          <Left><Icon name='md-person-add' style={{ paddingLeft: 10 }}></Icon></Left>
          <Body><Text>declan</Text></Body>
          <Right><EntypoIcon name='back-in-time' style={{ paddingRight: 10, fontSize: 32 }}></EntypoIcon></Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  source={ require('../../assets/profile.jpg')}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>
              <View style={{ flex:3 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text>20</Text>
                    <Text style={{ fontSize: 10, color: '#a9a9a9'}}>posts</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>206</Text>
                    <Text style={{ fontSize: 10, color: '#a9a9a9'}}>followers</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>167</Text>
                    <Text style={{ fontSize: 10, color: '#a9a9a9'}}>following</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                  <Button bordered dark
                    style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 35 }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button bordered dark
                    style={{ flex: 1, marginLeft: 5, marginRight: 10, justifyContent: 'center', height: 35 }}
                  >
                    <Icon name='settings'/>
                  </Button>
                </View>
              </View>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Declan Vea</Text>
              <Text>Husband | Dog Dad | Software Developer</Text>
              <Text>https://github.com/declanvea</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});