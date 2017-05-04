import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Button, Icon, Text, Body, Card, CardItem, Badge} from 'native-base';

import ActivityContentContainerComponent from '../components/ActivityContentContainerComponent';

const ActivityListComponent = (props) => {

  populateContentList = () => {
    return props.contents.map(function(content, i){
      return (
        <ActivityContentContainerComponent
          id={content+i}
          key={content+i}
          content={content}
        />
      );
    });
  }

  return (
    <Card>
      <CardItem header>
        <Text>{props.header}</Text>
      </CardItem>
      <CardItem>
        <Body>
          {this.populateContentList()}
        </Body>
      </CardItem>
    </Card>
  );
}

ActivityListComponent.defaultProps = {};

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

export default ActivityListComponent;
