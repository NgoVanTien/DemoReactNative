import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Card } from './common';
import ImageUpdate from './ImageUpdate';

class Logout extends Component {

  onButtonPress() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <Card>
        <CardSection>
          <ImageUpdate />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Logout
          </Button>
        </CardSection>

      </Card>
    );
  }
}

export default Logout;
