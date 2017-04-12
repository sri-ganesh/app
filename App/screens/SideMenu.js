import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header>
          <Title>Header</Title>
        </Header>
        <Content>
          <Text onPress={this.onSettingsPress.bind(this)}>Settings</Text>
        </Content>
      </Container>
    );
  }

  onSettingsPress() {
    this._toggleDrawer();
    this.props.navigator.showModal({
      title: "Settings",
      screen: "activeBacks.SettingsScreen"
    });
  }

  _toggleDrawer() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true
    });
  }
}

const styles = StyleSheet.create({});
