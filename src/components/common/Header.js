import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewHeader}>
      <Text style={styles.header} >{props.headerText}</Text>
    </View>
  );
};

export { Header };

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
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
