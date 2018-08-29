import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class CardComponent extends React.Component {
  render() {
      const images = {
          '1': require('../assets/pebblebeach.jpg'),
          '2': require('../assets/pebble8.jpg'),
          '3': require('../assets/pebble18.jpg')
      }
    return (
      <Card>
        <CardItem>
            <Left>
                <Thumbnail source={require('../assets/profile.jpg')} />
                <Body>
                    <Text>Declan</Text>
                    <Text note>Aug 29, 2018</Text>
                </Body>
            </Left>
        </CardItem>
        <CardItem cardBody>
            <Image
            source={ images[this.props.imageSource]}
            style={ { height: 200, width: null, flex: 1 } }
            />
        </CardItem>
        <CardItem style={{ height: 45 }}>
            <Left>
                <Button transparent>
                    <Icon name='ios-heart-outline' style={{ color: '#000000' }}/>
                </Button>
                <Button transparent>
                    <Icon name='ios-chatbubbles-outline' style={{ color: '#000000' }}/>
                </Button>
                <Button transparent>
                    <Icon name='ios-send-outline' style={{ color: '#000000' }}/>
                </Button>
            </Left>
        </CardItem>
        <CardItem>
            <Text>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem>
            <Body>
                <Text>
                    <Text style={{ fontWeight: '900' }}>declan </Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});