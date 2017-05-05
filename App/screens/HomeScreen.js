import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import HeaderComponent from '../components/HeaderComponent';
import NLIComponent from '../components/NLIComponent';
import PainIndexComponent from '../components/PainIndexComponent';

export default class HomeScreen extends React.Component {

  state = {
    firstTimeWelcome: true,
    activeSection: false,
    collapsed: true,
    isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>

        <HeaderComponent
          navigate = {navigate}
          title = "activebacks"
          displayHomeButtons={true}
        />

        <Content>
          <Grid>
            <Row>
              <NLIComponent
                firstTime={this.state.firstTimeWelcome}
                navigate={this.props.navigation}
              />
            </Row>
            <Row>
            </Row>
          </Grid>
        </Content>
        <Footer>
          <Button
            onPress={() => navigate('Dashboard')}
          >
            <Text>Dashboard</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
