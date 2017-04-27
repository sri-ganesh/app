import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Button, Icon, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

const HeaderComponent = ({navigate}) => {;
  return (
    <Header>
      <Grid>
        <Row>
          <Col>
            <Button small>
              <Icon
                name='ios-menu'
                style={{fontSize: 20}}
              />
            </Button>
          </Col>
          <Col><Title>activeXbacks</Title></Col>
          <Col>
            <Button small>
              <Icon
                name='ios-chatbubbles'
                style={{fontSize: 20}}
              />
            </Button>
          </Col>
          <Col>
            <Button small>
              <Icon
                name='ios-help'
                style={{fontSize: 20}}
              />
            </Button>
          </Col>
        </Row>
      </Grid>
    </Header>
  );
}

const styles = StyleSheet.create({});

export default HeaderComponent;
