import React from 'react';
import { Navigator } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './Login';
import Logout from './Logout';
import TechStack from './TechStack';
import EmployeeCreate from './EmployeeCreate';
import EmployeesList from './EmployeesList';
import EmployeeEdit from './EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }} >
      <Scene key="auth" >
        <Scene key="login" component={Login} title="Login Now" />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeesList"
          component={EmployeesList}
          title="You want to Logout"
        />
      </Scene>
      <Scene key="employeeCreate" component={EmployeeCreate} title="Logout Now" />
      <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Now" />
    </Router>
  );
};

export default RouterComponent;
