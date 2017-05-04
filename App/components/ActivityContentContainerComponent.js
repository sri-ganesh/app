import React, { Component } from 'react';
import { StyleSheet, AlertIOS } from 'react-native';
import { Header, Title, Button, Icon, Text, Left, Right, Body, Badge} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ActivityContentContainerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      content: props.content,
    };
  }

  onContentPress = () => {
    AlertIOS.alert(this.state.id);
  }

  render() {
    return (
      <Badge
        key={this.state.id}
        style={StyleSheet.flatten(styles.nonActive)}
        onPress={this.onContentPress}
      >
        <Text
          style={StyleSheet.flatten(styles.text)}
        >
          {this.state.content}
        </Text>
      </Badge>
    );
  }
}

const styles = StyleSheet.create({
  nonActive: {
    borderColor: '#D3DBE1',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  active: {
    backgroundColor: '#FB8023'
  },
  text: {
    color: 'black'
  }
});
