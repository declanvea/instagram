import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import {Icon, Container, Content, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent';

class HomeTab extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-home" style={{ color: tintColor}} />
        )
    }
  render() {
    const headshots = {
      '1': require('../../assets/headshots/headshot1.jpg'),
      '2': require('../../assets/headshots/headshot2.jpg'),
      '3': require('../../assets/headshots/headshot3.jpg'),
      '4': require('../../assets/headshots/headshot4.jpg'),
      '5': require('../../assets/headshots/headshot5.jpg'),
      '6': require('../../assets/headshots/headshot6.jpg'),
      '7': require('../../assets/headshots/headshot7.jpg'),
      '8': require('../../assets/headshots/headshot8.jpg'),
      '9': require('../../assets/headshots/headshot9.jpg'),
      '10': require('../../assets/headshots/headshot10.jpg'),
      '11': require('../../assets/headshots/headshot11.jpg'),
      '12': require('../../assets/headshots/headshot12.jpg')
    }
    return (
      <Container style={styles.container}>
        <Header>
          <Left><Icon name='ios-camera-outline' style={{ paddingLeft: 10 }}></Icon></Left>
          <Body><Text>Instagram</Text></Body>
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
              {/* { headshots.map( (headshot, i) => 
                <Thumbnail
                    key={i}
                    style={{ marginHorizontal: 5, borderColor: '#ffc0cb' }}
                    source={ headshot[i+1] }
                />  )
              } */}
                <Thumbnail
                style={styles.border}
                source={ headshots['1'] }
                />
                <Thumbnail
                style={styles.border}
                source={ headshots['2'] }
                />
                <Thumbnail
                style={styles.border}
                source={ headshots['3'] }
                />
                <Thumbnail
                style={styles.border}
                source={ headshots['4'] }
                />
                <Thumbnail
                style={styles.border}
                source={ headshots['5'] }
                />
                <Thumbnail
                style={styles.border}
                source={ headshots['6'] }
                />
                <Thumbnail
                style={styles.border}
                source={ headshots['7'] }
                />
                <Thumbnail
                style={styles.border}
                source={ headshots['8'] }
                />
                <Thumbnail
                style={styles.border}
                source={ headshots['9'] }
                />
                <Thumbnail
                style={styles.border}
                source={ headshots['10'] }
                />
                <Thumbnail
                style={styles.border}
                source={ headshots['11'] }
                />
                <Thumbnail
                style={styles.border}
                source={ headshots['12'] }
                />
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