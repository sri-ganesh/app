import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import HeaderComponent from '../components/HeaderComponent';

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
        <HeaderComponent />
        <Content>
          <Grid>
            <Row>
            </Row>
            <Row>
            </Row>
          </Grid>
        </Content>
        <View>
          <Text
            onPress={() => navigate('Dashboard')}
          >
            Dashboard
          </Text>
          <Text
            onPress={() => navigate('Activities')}
          >
            activities
          </Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
