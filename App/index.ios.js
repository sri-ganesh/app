import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import DashboardScreen from './screens/DashboardScreen';
import BodyMapScreen from './screens/BodyMapScreen';
import CliffOfPainScreen from './screens/CliffOfPainScreen';
import KnowledgeScreen from './screens/KnowledgeScreen';
import LifeGymScreen from './screens/LifeGymScreen';
import MeditationScreen from './screens/MeditationScreen';


const activeBacks_app = StackNavigator({
  // SideMenu: {screen: SideMenu},
  // Settings: {screen: SettingsScreen},
  Dashboard: {screen: DashboardScreen},
  BodyMap: {screen: BodyMapScreen},
  CliffOfPain: {screen: CliffOfPainScreen},
  Knowledge: {screen: KnowledgeScreen},
  LifeGym: {screen: LifeGymScreen},
  Meditation: {screen: MeditationScreen},
});

AppRegistry.registerComponent('activeBacks_app', () => activeBacks_app);
