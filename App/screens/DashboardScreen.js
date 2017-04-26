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
        <Header>
          <Button small>
            <Icon
              name='ios-menu'
              style={{fontSize: 20}}
            />
          </Button>
          <Title>activeXbacks</Title>
          <Button small>
            <Icon
              name='ios-chatbubbles'
              style={{fontSize: 20}}
            />
          </Button>
          <Button small>
            <Icon
              name='ios-help'
              style={{fontSize: 20}}
            />
          </Button>
        </Header>
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
