import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import OnBoardingScreen from './screens/OnBoardingScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgottenPasswordScreen from './screens/ForgottenPasswordScreen';

import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import DailyGymScreen from './screens/DailyGymScreen';
import MindfulnessScreen from './screens/MindfulnessScreen';

import Sidebar from './screens/Sidebar';

import HelpScreen from './screens/HelpScreen';
import AccountScreen from './screens/AccountScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import SoundScreen from './screens/SoundScreen';
import PrivacyScreen from './screens/PrivacyScreen';
import TCScreen from './screens/TCScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import EditProfileScreen from './screens/EditProfileScreen';

const NavigationOnBoardingStack = StackNavigator({
  OnBoarding: {screen: OnBoardingScreen},
  Register: {screen: RegisterScreen},
  ForgottenPassword: {screen: ForgottenPasswordScreen},
},{
  headerMode: 'none',
});

export const NavigationMainStack = StackNavigator({
  Home: {screen: HomeScreen},
  Dashboard: {screen: DashboardScreen}
},{
  headerMode: 'none',
  mode: 'modal',
});

const DashboardStack = StackNavigator({
  Dashboard: {screen: DashboardScreen}
},{
  headerMode: 'none',
  mode: 'modal',
});

const DrawerRoutes = DrawerNavigator({
  // NavigationOnBoarding: {screen: NavigationOnBoardingStack},
  NavigationMain: {screen: NavigationMainStack},
  Help: {screen: HelpScreen},
  Account: {screen: AccountScreen},
  Notifications: {screen: NotificationsScreen},
  Sound: {screen: SoundScreen},
  Privacy: {screen: PrivacyScreen},
  TC: {screen: TCScreen},
  ContactUs: {screen: ContactUsScreen},
  EditProfile: {screen: EditProfileScreen},
},{
  headerMode: 'none',
  drawerWidth: 250,
  contentComponent: props => <Sidebar {...props}/>
});

export const Root = StackNavigator({
  Drawer: {screen: DrawerRoutes},
},{
  headerMode: 'none',
});
