import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Badge } from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";

import SystemDialogComponent from './SystemDialogComponent'
import UserDialogResponseComponent from './UserDialogResponseComponent'

//place logic in return https://medium.com/walmartlabs/make-your-react-components-pretty-a1ae4ec0f56eStarcit
const IntroDialogueComponent = (props) => {

  return (
    <Content>
      {props.firstTimeWelcome ? (
        <SystemDialogComponent inputText='Welcome back' />
      ) : (
        <SystemDialogComponent inputText='Welcome! This is an app' />
      )}
      <Grid>
        <Col>
          <UserDialogResponseComponent
            respText='awesome!'
          />
        </Col>
        <Col>
          <UserDialogResponseComponent
            respText='no'
          />
        </Col>
      </Grid>
    </Content>


  );
}

const styles = StyleSheet.create({});

export default IntroDialogueComponent;
