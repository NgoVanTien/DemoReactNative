/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Header from './src/components/header';


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.viewHeader}>
        <Header headerText={'NgoTien'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewHeader: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});
