import React from 'react';
import {AppRegistry, Text} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import NavComponent from '../components/NavComponent';

export default class DashboardScreen extends React.Component {
  static navigationOptions = {title: 'Dashboard',};


  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
				<Content>
          <Text>Dashboard</Text>
        </Content>
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
      </Container>
    );
  }
}
