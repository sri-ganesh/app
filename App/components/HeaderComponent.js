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
            name='md-menu'
            style={{fontSize: 25}}
            onPress={() => props.navigate('DrawerOpen')}
          />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right>

      {props.displayHomeButtons ? (
        <Button transparent>
          <Icon
            name='md-chatbubbles'
            style={{fontSize: 25}}
          />
          <Icon
            name='md-help'
            style={{fontSize: 25}}
          />
        </Button>
      ) : (
        <Button
          transparent
          onPress={() => props.navigate('NavigationMain')}
        >
          <Icon name='md-arrow-back' />
        </Button>
      )}
      </Right>
    </Header>
  );
}

HeaderComponent.defaultProps = {
  displayHomeButtons: false
};

const styles = StyleSheet.create({
});

export default HeaderComponent;
