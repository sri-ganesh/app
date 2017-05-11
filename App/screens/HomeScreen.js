import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import HeaderComponent from '../components/HeaderComponent';
import NLIComponent from '../components/NLIComponent';
import PainIndexComponent from '../components/PainIndexComponent';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'antero.duarte',
      password: 'testpassword',
      firstTimeWelcome: true,
      activeSection: false,
      collapsed: true,
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      disableGestures: true
    };
  }

  componentWillMount() {

    fetch('https://activexbacks.com/api/user/token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         'user': this.state.username,
         'pass': this.state.password
      })
    }).then( (userToken) => {
      fetch('https://activexbacks.com/api/user/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'name': this.state.username,
          'pass': this.state.password,
          'token': JSON.parse(userToken._bodyText).token
        })
      }).then( (userData) => {
        if(userData.status === 200){
          alert(JSON.stringify(userData));
        }
        else{
          alert('Login Failed. Please try again');
        }
      }).catch((error) => {
        alert('Login Failed. Please try again'+error);
      });
    }).catch((error) => {
      alert('User authentication failed for reason: '+error);
    });
  }

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
