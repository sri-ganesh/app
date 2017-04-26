import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class ActivitiesScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      firstTimeWelcome: true,
    };
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <Content>
          <Text>Activites</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
