import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class DashboardScreen extends React.Component {

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
          <Grid>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  dashboardContainer: {
    position: 'absolute',
    bottom: 0
  }
});
