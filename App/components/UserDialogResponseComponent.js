import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Badge } from 'native-base';

const UserDialogResponseComponent = ({respText}) => {
  return (
    <Badge info>
      <Text>
        {respText}
      </Text>
    </Badge>
  );
}

// inputText.propTypes = { PropTypes.string }

const styles = StyleSheet.create({});

export default UserDialogResponseComponent;
