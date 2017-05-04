import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Badge } from 'native-base';

const UserDialogResponseComponent = (props) => {
  let outputText = null;
  if (props.isThereAny == true) {
    outputText = props.inputText;
    return (
      <View style={styles.circle}>
        <Text>
          {outputText}
        </Text>
      </View>
    );
  } else {
    return null;
  }
}

// inputText.propTypes = { PropTypes.string }

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 20,
    borderRadius: 10/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lime'
  },
});

export default UserDialogResponseComponent;
