import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Badge } from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";

import SystemDialogComponent from './SystemDialogComponent';
import UserDialogResponseComponent from './UserDialogResponseComponent';

import NLIDialog from '../NLIDialog';

//place logic in return https://medium.com/walmartlabs/make-your-react-components-pretty-a1ae4ec0f56eStarcit
const NLIComponent = (props) => {

  // return (
  //   <Content>
  //     {props.firstTimeWelcome ? (
  //       <SystemDialogComponent inputText='Welcome back' />
  //     ) : (
  //       <SystemDialogComponent inputText={NLIDialog[1].opener} />
  //     )}
  //     <Grid>
  //       <Col>
  //         <UserDialogResponseComponent
  //           respText='awesome!'
  //         />
  //       </Col>
  //       <Col>
  //         <UserDialogResponseComponent
  //           respText='no'
  //         />
  //       </Col>
  //     </Grid>
  //   </Content>
  // );
  return (
    <Content>
      <SystemDialogComponent inputText={NLIDialog[1].opener} />
      <SystemDialogComponent inputText={NLIDialog[2].opener} />
      <SystemDialogComponent inputText={NLIDialog[3].opener} />
      <Grid>
        <Col>
          <UserDialogResponseComponent
            respText={NLIDialog[3].responses["3a"]}
          />
        </Col>
        <Col>
          <UserDialogResponseComponent
            respText={NLIDialog[3].responses["3b"]}
          />
        </Col>
      </Grid>
    </Content>
  );
}

const styles = StyleSheet.create({});

export default NLIComponent;
