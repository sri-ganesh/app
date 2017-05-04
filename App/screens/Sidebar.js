import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, AlertIOS} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Thumbnail } from 'native-base';

import IconComponent from '../components/IconComponent';

export default class Drawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Islawithatash',
      painDiagnoses: 'Your back pain indicated Accute, Unilateral, Scaitica',
      backPainCategory: 'You are Extension Intolerant and your worst activity is lifting'
    };
  }

  onSignoutPress = () => {
    AlertIOS.alert("You've been signed out.");
  }

  onEditProfilePress = () => {
    AlertIOS.alert("You've been signed out.");
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={this.onSignoutPress}
            >
              <Text>Signout</Text>
            </Button>
          </Left>
          <Body>
            <Text>Profile</Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => navigate('EditProfile')}
            >
              <Text>Edit</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid>
            <Row>
              <Col/>
              <Col>
                <Thumbnail
                  source={require('../res/img/img.png')}
                />
              </Col>
              <Col/>
            </Row>
            <Row>
              <Text>{this.state.userName}</Text>
            </Row>
            <Row>
              <Text>{this.state.painDiagnoses}</Text>
            </Row>
            <Row>
              <Text>{this.state.backPainCategory}</Text>
            </Row>
            <TouchableOpacity onPress={() => navigate('Help')}>
              <IconComponent
                iconName = 'ios-menu'
                inputText = 'Help'
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('Account')}>
              <IconComponent
                iconName = 'ios-menu'
                inputText = 'Account'
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Notifications')}>
              <IconComponent
                iconName = 'ios-menu'
                inputText = 'Notifications'
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Sound')}>
              <IconComponent
                iconName = 'ios-menu'
                inputText = 'Sound'
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Privacy')}>
              <IconComponent
                iconName = 'ios-menu'
                inputText = 'Privacy Policy'
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('TC')}>
              <IconComponent
                iconName = 'ios-menu'
                inputText = 'Terms & Conditions'
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('ContactUs')}>
              <IconComponent
                iconName = 'ios-menu'
                inputText = 'Contact Us'
              />
            </TouchableOpacity>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 18,
    backgroundColor: '#CED8DD',
  }
});
