import React from 'react';
import { StyleSheet, Text, View , ScrollView, Image } from 'react-native';
import {Icon, Container, Content, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent';

class HomeTab extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-home" style={{ color: tintColor}} />
        )
    }
  render() {
    const headshots = [
      {source: require('../../assets/headshots/headshot1.jpg')},
      {source: require('../../assets/headshots/headshot2.jpg')},
      {source: require('../../assets/headshots/headshot3.jpg')},
      {source: require('../../assets/headshots/headshot4.jpg')},
      {source: require('../../assets/headshots/headshot5.jpg')},
      {source: require('../../assets/headshots/headshot6.jpg')},
      {source: require('../../assets/headshots/headshot7.jpg')},
      {source: require('../../assets/headshots/headshot8.jpg')},
      {source: require('../../assets/headshots/headshot9.jpg')},
      {source: require('../../assets/headshots/headshot10.jpg')},
      {source: require('../../assets/headshots/headshot11.jpg')},
      {source: require('../../assets/headshots/headshot12.jpg')}
    ]
    return (
      <Container style={styles.container}>
        <Header>
          <Left><Icon name='ios-camera-outline' style={{ paddingLeft: 10 }}></Icon></Left>
          <Body><Image style={{ height: 25, width: 75 }} source={ require('../../assets/instagram.png') }/></Body>
          <Right><Icon name='ios-send-outline' style={{ paddingRight: 10 }}></Icon></Right>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
              <Text style={{ fontWeight: 'bold' }}>Stories</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='md-play' style={{ fontSize: 14 }}></Icon>
                <Text style={{ fontWeight: 'bold' }}>Watch All</Text>
              </View>
            </View>
            <View style={{ flex:3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingStart: 5,
                    paddingEnd: 5
                }}
              >
              { headshots.map( (headshot, i) => (
                <Thumbnail
                  key={i}
                  style={{ marginHorizontal: 5, borderColor: '#ffc0cb' }}
                  source={ headshot.source }
                />  
              ))
              }
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="201"/>
          <CardComponent imageSource="3" likes="301"/>
        </Content>
      </Container>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  border: {
    marginHorizontal: 5,
    borderWidth: 1, 
    borderColor: '#ffc0cb'
  }
});