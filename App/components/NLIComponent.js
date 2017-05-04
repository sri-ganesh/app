import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Badge } from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";

import SystemDialogComponent from './SystemDialogComponent';
import UserDialogResponseComponent from './UserDialogResponseComponent';

import NLIDialog from '../NLIDialog';

//place logic in return https://medium.com/walmartlabs/make-your-react-components-pretty-a1ae4ec0f56eStarcit
export default class NLIComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: NLIDialog,
      currentOpener: 0,
      currentUserReponse: 0
    }
  }

  componentDidMount() {
    this.setState({data: NLIDialog});
  }

  onPressedEvent = () => {
  }
/*
<UserDialogResponseComponent
  respText={dialog.responses[0]}
  isThereAny={dialog.isThereAnyResponses}
  style={styles.leftResponse}
/>
<UserDialogResponseComponent
  respText={dialog.responses[1]}
  isThereAny={dialog.isThereAnyResponses}
  style={styles.leftResponse}
/>
*/

/*
let dialogs = this.state.data.map(function(dialog, i){
  return  (
    <View>
      <SystemDialogComponent
        key={dialog.id}
        inputText={dialog.opener}
      />
    </View>
  );
});
*/

  showCurrentOpener = () => {
    return(
      <SystemDialogComponent
        inputText={this.state.data[this.state.currentOpener].opener}
      />
    );
  }

  showCurrentResponses = () => {
    return(
      <UserDialogResponseComponent
        inputText={dialog.responses[1]}
      />
    );
  }
  
  render() {
    return (
      <Container>
        <ScrollView>
          {this.showCurrentOpener()}
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  responseContainer: {
    bottom: 0,
    position: 'absolute'
  },
  leftResponse: {
    bottom: 0
  },
  rightResponse: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
});
