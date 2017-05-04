import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Button, Icon, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

const SidebarHeaderComponent = (props) => {
  return (
    <Header>
      <Grid>
        <Row>
          <Col>
            <Icon
              name='ios-menu'
              style={{fontSize: 18}}
              onPress={() => this.props.navigate('Register')}
            />
          </Col>
          <Col><Title>activeXbacks</Title></Col>
          <Col>
            <Icon
              name='ios-chatbubbles'
              style={{fontSize: 25}}
            />
          </Col>
          <Col>
            <Icon
              name='ios-help'
              style={{fontSize: 25}}
            />
          </Col>
        </Row>
      </Grid>
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
