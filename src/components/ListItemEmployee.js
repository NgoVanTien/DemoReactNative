import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItemEmployee extends Component {
  onRowPress() {
    Actions.employeeEdit({ employees: this.props.employees });
  }

  render() {
    const { name } = this.props.employees;
    console.log("abcd123", this.props.employees);
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};


export default ListItemEmployee;
