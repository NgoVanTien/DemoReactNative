import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './common';
import LibraryList from './LibraryList';

class TechStack extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText='Tech Stack' />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default TechStack;
