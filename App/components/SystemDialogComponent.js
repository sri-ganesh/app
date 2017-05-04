import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Badge } from 'native-base';

const SystemDialogComponent = ({inputText}) => {
  return (
    <View style={styles.circle}>
      <Text>
        {inputText}
      </Text>
    </View>
  );
}

// inputText.propTypes = { PropTypes.string }
const styles = StyleSheet.create({
  circle: {
    width: 200,
    borderRadius: 10/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
});

export default SystemDialogComponent;
