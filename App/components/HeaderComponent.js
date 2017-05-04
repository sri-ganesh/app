import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Button, Icon, Text, Left, Right, Body} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

const HeaderComponent = (props) => {
  return (
    <Header>
      <Left>
        <Button
          transparent
        >
          <Icon
            name='ios-menu'
            tyle={{fontSize: 18}}
            onPress={() => props.navigate('DrawerOpen')}
          />
        </Button>
      </Left>
      <Body>
        <Title>activebacks</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon
            name='ios-chatbubbles'
            style={{fontSize: 25}}
          />
          <Icon
            name='ios-help'
            style={{fontSize: 25}}
          />
        </Button>
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
});

export default HeaderComponent;
