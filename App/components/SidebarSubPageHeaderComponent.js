import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Button, Icon, Text } from 'native-base';

const SidebarSubPageHeaderComponent = (props) => {
  return (
    <Header>
      <Left>
        <Button
          transparent
        >
          <Icon name='ios-menu' />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
        <Text>Review & edit your details</Text>
      </Body>
      <Right>
        <Button
          transparent
          onPress={() => navigate('Sidebar')}
        >
          <Icon name='arrow-back' />
        </Button>
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  menuIcon: {
    position: 'absolute',
    left: 0,
    fontSize: 20
  },
  communityIcon: {
    position: 'absolute',
    left: 0,
    fontSize: 20
  },
  helpIcon: {
    position: 'absolute',
    left: 0,
    fontSize: 20
  }
});

export default HeaderComponent;
