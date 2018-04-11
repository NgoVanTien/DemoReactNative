import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from './actions';

class Login extends Component {

  state = { email: '', password: '', loading: false };

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  //using redux to login

  onEmailChange(text) {
    // email => this.setState({ email })
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    )
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="******@***.***"
            lable={'Email'}
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            lable={'Password'}
            value={this.state.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>


        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);
