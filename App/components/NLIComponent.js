import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Badge } from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";

import OpenerDialogComponent from './OpenerDialogComponent';
import ResponseDialogComponent from './ResponseDialogComponent';

import NLIDialog from '../NLIDialog';

//place logic in return https://medium.com/walmartlabs/make-your-react-components-pretty-a1ae4ec0f56eStarcit
export default class NLIComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: NLIDialog,
      currentOpener: 0,
      displayedOpeners: [0]
    }
  }

  componentWillMount() {
    this.setState({data: NLIDialog});
  }

  componentDidUpdate() {
    this.nextOpener();
  }

  onPressedEvent = () => {
  }

  nextOpener = () => {
    let newDisplayedOpeners = this.state.displayedOpeners;
    let currentOpener = this.state.currentOpener;

    if (this.state.data[currentOpener].responses.length == 0) {
      currentOpener++;
      newDisplayedOpeners.push(currentOpener);
      this.setState({
        currentOpener: currentOpener,
        displayedOpeners: newDisplayedOpeners
      })
    }
  }

  incrementOpener = () => {
    let newDisplayedOpeners = this.state.displayedOpeners;
    let currentOpener = this.state.currentOpener;
    currentOpener++;
    newDisplayedOpeners.push(currentOpener);
    this.setState({
      currentOpener: currentOpener,
      displayedOpeners: newDisplayedOpeners
    })
  }

  renderOpeners = (opener, i) => {
    return(
      <OpenerDialogComponent
        key={i}
        inputText={this.state.data[opener].opener}
      />
    );
  }

  renderCurrentResponses = (response, i) => {
    return(
      <Col key={i}>
        <TouchableOpacity onPress={this.incrementOpener}>
          <ResponseDialogComponent
            inputText={response}
          />
        </TouchableOpacity>
      </Col>
    );
  }

  /*pass function to child then on click pass back to parrent*/
  render() {
    return (
      <Container>
        <Row size={3}>
          <ScrollView>
            {this.state.displayedOpeners.map(this.renderOpeners)}
          </ScrollView>
        </Row>
        <Row size={1}>
          {this.state.data[this.state.currentOpener].responses.map(this.renderCurrentResponses)}
        </Row>
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
