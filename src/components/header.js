import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <Text style={styles.header} >{props.headerText}</Text>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 42,
  },
});
