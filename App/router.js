import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import OnBoardingScreen from './screens/OnBoardingScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgottenPasswordScreen from './screens/ForgottenPasswordScreen';

import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';
import DailyGymScreen from './screens/DailyGymScreen';
import MindfulnessScreen from './screens/MindfulnessScreen';

import SettingsScreen from './screens/SettingsScreen';

export const NavigationMainStack = StackNavigator({
    Home: {screen: HomeScreen},
    Dashboard: {screen: DashboardScreen},
    Activities: {screen: ActivitiesScreen},
  },{
    mode: 'modal',
    headerMode: 'none',
  }
);

export const NavigationOnBoardingStack = StackNavigator({
  OnBoarding: {screen: OnBoardingScreen},
  Register: {screen: RegisterScreen},
  ForgottenPassword: {screen: ForgottenPasswordScreen},
});

// export const SettingsStack = StackNavigator({
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings',
//     },
//   },
// });

export const Drawer = DrawerNavigator({
  Settings: {screen: SettingsScreen},
});


export const Root = StackNavigator({
  NavigationOnBoarding: {screen: NavigationOnBoardingStack},
  NavigationMain: {screen: NavigationMainStack},
}, {
  mode: 'modal',
  headerMode: 'none',
});
