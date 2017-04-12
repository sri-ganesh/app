import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class NavComponent extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <Footer>
        <FooterTab>
          <Button small transparent>
            <Text onPress={() => navigate('Dashboard')}>Dashboard</Text>
          </Button>
          <Button small transparent>
            <Text onPress={() => navigate('CliffOfPain')}>Cliff of Pain</Text>
          </Button>
          <Button small transparent>
            <Text onPress={() => navigate('BodyMap')}>BodyMap</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button small transparent>
            <Text onPress={() => navigate('LifeGym')}>Life Gym</Text>
          </Button>
          <Button small transparent>
            <Text onPress={() => navigate('Knowledge')}>Knowledge</Text>
          </Button>
          <Button small transparent>
            <Text onPress={() => navigate('Meditation')}>Meditation</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({});
