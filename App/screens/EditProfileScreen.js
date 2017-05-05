import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Thumbnail } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import ProfileFieldComponent from '../components/ProfileFieldComponent';

export default class EditProfileScreen extends Component {
  static navigationOptions = {
  };


//four gender states
// ["None", "Female", "Male", "Non-Binary"]

  constructor(props) {
    super(props);
    this.state = {
      title: 'Profile',
      subtitle: 'Review & edit your details',
      userName: 'Islawithatash',
      email: 'isla.muro@ed.ac.uk',
      age: 38,
      gender: 'Female',
      height: '6ft',
      weight: '50kg'
    }
  }

  render() {
    const {navigate, goBack} = this.props.navigation;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
            >
              <Icon name='ios-menu' />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.title}</Title>
            <Text>{this.state.subtitle}</Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => navigate('NavigationMain')}
            >
              <Icon name='arrow-back' />
            </Button>
          </Right>
        </Header>

        <Content>
          <Grid>
            <Row>
              <Col/>
              <Thumbnail
                source={require('../res/img/img.png')}
              />
              <Col/>
            </Row>
            <ProfileFieldComponent
              fieldName = 'name'
              fieldInput = {this.state.userName}
            />
            <ProfileFieldComponent
              fieldName = 'email'
              fieldInput = {this.state.email}
            />
            <ProfileFieldComponent
              fieldName = 'age'
              fieldInput = {this.state.age}
            />
            <ProfileFieldComponent
              fieldName = 'gender'
              fieldInput = {this.state.gender}
            />
            <ProfileFieldComponent
              fieldName = 'height'
              fieldInput = {this.state.height}
            />
            <ProfileFieldComponent
              fieldName = 'weight'
              fieldInput = {this.state.weight}
            />
          </Grid>
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({});
