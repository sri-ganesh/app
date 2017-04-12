import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigate} = this.props.navigation;
    
    return (
      <Container>
        <Content>
          <Text>Settings</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
