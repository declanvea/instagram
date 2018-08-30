import React from 'react';
import { StyleSheet, Text, View , Image, Dimensions } from 'react-native';
import {Icon, Container, Content, Header, Left, Right, Body, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CardComponent from '../CardComponent';

const images = [
  require('../../assets/headshots/headshot1.jpg'),
  require('../../assets/headshots/headshot2.jpg'),
  require('../../assets/headshots/headshot3.jpg'),
  require('../../assets/headshots/headshot4.jpg'),
  require('../../assets/headshots/headshot5.jpg'),
  require('../../assets/headshots/headshot6.jpg'),
  require('../../assets/headshots/headshot7.jpg'),
  require('../../assets/headshots/headshot8.jpg'),
  require('../../assets/headshots/headshot9.jpg'),
  require('../../assets/headshots/headshot10.jpg'),
  require('../../assets/headshots/headshot11.jpg'),
  require('../../assets/headshots/headshot12.jpg')
];
const { width, height } = Dimensions.get('window');

class ProfileTab extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="person" style={{ color: tintColor}} />
        )
    }
    state = {
      activeIndex: 0
    };
    
    segmentClicked = index => {
      this.setState({
        activeIndex: index
      })
    };
    renderSectionOne = () => {
      return images.map( (image, i) => (
        <View key={i} style={[
          {width: (width)/3},
          {height: (width)/3},
          i % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0},
          {marginBottom: 2} ]}>
          <Image style={{ flex: 1, width: undefined, height: undefined }} source={image} />
        </View>
      ))
    };
  
    renderSection = () => {
      if(this.state.activeIndex == 0 ){
        return(
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            { this.renderSectionOne() }
          </View>
        )
      }
      else if (this.state.activeIndex == 1){
        return(
          <View>
            <CardComponent imageSource="1" likes="101"/>
            <CardComponent imageSource="2" likes="201"/>
            <CardComponent imageSource="3" likes="301"/>
          </View>
        )
      }
    };
    
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
                    style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 40 }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button bordered dark
                    style={{ flex: 1, marginLeft: 5, marginRight: 10, justifyContent: 'center', height: 40 }}
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

          <View>
            < View style = {
              {
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderTopWidth: 1,
                borderTopColor: '#d3d3d3'
              }
            } >
              <Button transparent onPress={() => this.segmentClicked(0)} active={this.state.activeIndex == 0}>
                <Icon name='ios-apps-outline' style={[this.state.activeIndex == 0 ? {} : { color: '#808080'}]}/>
              </Button>
              <Button transparent onPress={() => this.segmentClicked(1)} active={this.state.activeIndex == 1}>
                <Icon name='ios-list-outline' style={[this.state.activeIndex == 1 ? {} : { color: '#808080'}]}/>
              </Button>
              <Button transparent onPress={() => this.segmentClicked(2)} active={this.state.activeIndex == 2}>
                <Icon name='ios-people-outline' style={[this.state.activeIndex == 2 ? {} : { color: '#808080'}]}/>
              </Button>
              <Button transparent onPress={() => this.segmentClicked(3)} active={this.state.activeIndex == 3}>
                <Icon name='ios-bookmark-outline' style={[this.state.activeIndex == 3 ? {} : { color: '#808080'}]}/>
              </Button>
            </View>
            <View></View>
          </View>
          { this.renderSection() }
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