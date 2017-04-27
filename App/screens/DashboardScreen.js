import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import IntroDialogueComponent from '../components/IntroDialogueComponent';
import PainIndexComponent from '../components/PainIndexComponent';

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
            <Row size={2}>
              <IntroDialogueComponent
                firstTime={this.state.firstTimeWelcome}
              />
            </Row>
            <Row size={1}>
              <Text>Dashboard</Text>
              <Text>Actities</Text>
            </Row>
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
