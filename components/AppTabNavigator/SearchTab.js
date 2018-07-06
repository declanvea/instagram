import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';

class SearchTab extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-search" style={{ color: tintColor}} />
        )
    }
  render() {
    return (
      <View style={styles.container}>
          <Text>SearchTab</Text>
      </View>
    );
  }
}

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});