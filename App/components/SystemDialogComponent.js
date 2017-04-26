import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Badge } from 'native-base';

const SystemDialogComponent = ({inputText}) => {
  return (
    <Badge warning>
      <Text>
        {inputText}
      </Text>
    </Badge>
  );
}

// inputText.propTypes = { PropTypes.string }
const styles = StyleSheet.create({});

export default SystemDialogComponent;
