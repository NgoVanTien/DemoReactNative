/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import firebase from '@firebase/app';
import '@firebase/firestore'
import AlbumsList from './src/components/AlbumsList';
import { Header, Button, Spinner } from './src/components/common';
import Login from './src/components/Login';
import Logout from './src/components/Logout';
import TechStack from './src/components/TechStack';

type Props = {};
export default class App extends Component<Props> {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDIKvS2VXFvVkK7EONziVP9N6PWancB1iI',
      authDomain: 'demoreactnative-6037d.firebaseapp.com',
      databaseURL: 'https://demoreactnative-6037d.firebaseio.com',
      projectId: 'demoreactnative-6037d',
      storageBucket: 'demoreactnative-6037d.appspot.com',
      messagingSenderId: '429351964403'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        // return <Logout />
        return <TechStack />
      case false:
        return <Login />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Authentication !'} />
        {this.renderContent()}
      </View>

    );
  }
}
