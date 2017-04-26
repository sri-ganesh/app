import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert, Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class ForgottenPasswordScreen extends Component {
  static navigationOptions = {title: 'ForgottenPasswordScreen',};

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <Text>ForgottenPasswordScreen</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
