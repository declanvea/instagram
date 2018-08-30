import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import SearchTab from './AppTabNavigator/SearchTab';
import HomeTab from './AppTabNavigator/HomeTab';

class MainScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

  render() {
    return (
      <AppTabNavigator />
    );
  }
}

export default createStackNavigator({
    MainScreen: {
        screen: MainScreen
    }
});

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab,
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: "#d1cece",
        showLabel: false,
        showIcon: true
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});