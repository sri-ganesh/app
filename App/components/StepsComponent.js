import React, { Component } from 'react';
import { StyleSheet, AlertIOS } from 'react-native';
import { Header, Title, Button, Icon, Text, Left, Right, Body, Badge, ListItem} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class StepsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      content: props.content,
      active: props.active
    };
  }

  onContentPress = () => {
  }

  render() {
    return (
      <ListItem>
        <Badge
          key={this.state.id}
          style={StyleSheet.flatten(styles.nonActive)}
        >
          <Text
            style={StyleSheet.flatten(styles.text)}
          >
            {this.state.content}
          </Text>
        </Badge>
      </ListItem>
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
