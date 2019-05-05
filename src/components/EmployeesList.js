import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, TouchableWithoutFeedback, View } from 'react-native';
import { employeeFetch } from './actions';
import ListItemEmployee from './ListItemEmployee';

class EmployeesList extends Component {
  componentWillMount() {
    console.log('componentWillMount');
    this.props.employeeFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    console.log('createDataSource');
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employees) {
    console.log('nnnnmmmm', employees);
    return <ListItemEmployee employees={employees} />;
  }

  render() {
    console.log('asds', this.props);
    console.log('this.props');
    console.log(this.props.employees);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
console.log('ngotien', employees);
  return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeesList);
