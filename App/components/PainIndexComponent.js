import React, {Component} from 'react';
import {Text, StyleSheet, View, AlertIOS, TouchableWithoutFeedback, PanResponder, Animated} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class PainIndexComponent extends Component {

  state = {
    showPainSubmitButton: false,
    painValue: 0,
    circleSize: 50,
    dragging: false,
    painCircleColour: '#99FF66',
    dragValue: 0,
  }

  /*
    painValue
    circleSize
    circle color
    dragging: false,
    show button pain button
  */


  panResponder = {}

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    })
  }

  render() {
    const {painCircleColour, initialTop, initialLeft, offsetTop, offsetLeft, circleSize, borderRadius, painValue, showPainSubmitButton} = this.state

    // Update style with the state of the drag thus far
    const style = {
      backgroundColor: painCircleColour,
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize/2,
    }

    var painButton;
    if (showPainSubmitButton) {
      painButton =
        <Button
          onPress={this.handlePainSubmit}
        >
          <Text>Submit</Text>
        </Button>
    }

    return (
      <View>
        <View
          // Put all panHandlers into the Views props
          {...this.panResponder.panHandlers}
          style={[styles.circle, style]}
        >
          <Text style={styles.number}>{painValue}</Text>
        </View>
        {painButton}
      </View>
    )
  }

  handlePainSubmit = () => {
    const {painValue} = this.state
    AlertIOS.alert('Painscore Submitted', JSON.stringify({painValue}));
    this.setState({
      circleSize:50,
      painValue: 0,
      showPainSubmitButton: false
    })
  }

  handleStartShouldSetPanResponder = (e, gestureState) => {return true;}

  // We were granted responder status! Let's update the UI
  handlePanResponderGrant = (e, gestureState) => {
    this.setState({dragging: true})
  }

  // Every time the touch/mouse moves
  handlePanResponderMove = (e, gestureState) => {
    const {circleSize, dragValue} = this.state

    // Keep track of how far we've moved in total (dx and dy)
    console.log(Math.abs(Math.round(gestureState.dx - gestureState.dy)));
    // if dragValue
    if (circleSize >= 150) return;

    this.setState({
      dragValue: Math.abs(Math.round(gestureState.dx - gestureState.dy)),
      circleSize: circleSize+dragValue,
    })

    if (circleSize > 49 && circleSize <= 59) {
      this.setState({
        painValue: 0,
        painCircleColour: '#99FF66'
      })
    }

    if (circleSize > 60 && circleSize <= 69) {
      this.setState({
        painValue: 1,
        painCircleColour: '#A4E35B'
      })
    }

    if (circleSize > 70 && circleSize <= 79) {
      this.setState({
        painValue: 2,
        painCircleColour: '#B0C64F'
      })
    }

    if (circleSize > 80 && circleSize <= 89) {
      this.setState({
        painValue: 3,
        painCircleColour: '#BBAA44'
      })
    }

    if (circleSize > 90 && circleSize <= 99) {
      this.setState({
        painValue: 4,
        painCircleColour: '#C68E39'
      })
    }

    if (circleSize > 100 && circleSize <= 109) {
      this.setState({
        painValue: 5,
        painCircleColour: '#D2712D'
      })
    }

    if (circleSize > 110 && circleSize <= 119) {
      this.setState({
        painValue: 6,
        painCircleColour: '#DD5522'
      })
    }

    if (circleSize > 120 && circleSize <= 129) {
      this.setState({
        painValue: 7,
        painCircleColour: '#E83917'
      })
    }

    if (circleSize > 130 && circleSize <= 139) {
      this.setState({
        painValue: 8,
        painCircleColour: '#F41C0B'
      })
    }

    if (circleSize > 140 && circleSize <= 149) {
      this.setState({
        painValue: 9,
        painCircleColour: '#F41C0B'
      })
    }

    if (circleSize >= 150) {
      this.setState({
        painValue: 10,
        painCircleColour: '#FF0000'
      })
      return;
    }

    // switch (circleSize) {
    //   case 50:
    //   case 59:
    //     this.setState({
    //       painValue: 0,
    //       painCircleColour: '#99FF66'
    //     })
    //     break;
    //   case 60:
    //   case 69:
    //     this.setState({
    //       painValue: 1,
    //       painCircleColour: '#A4E35B'
    //     })
    //     break;
    //   case 70:
    //   case 79:
    //     this.setState({
    //       painValue: 2,
    //       painCircleColour: '#B0C64F'
    //     })
    //     break;
    //   case 80:
    //   case 89:
    //     this.setState({
    //       painValue: 3,
    //       painCircleColour: '#BBAA44'
    //     })
    //     break;
    //   case 90:
    //   case 99:
    //     this.setState({
    //       painValue: 4,
    //       painCircleColour: '#C68E39'
    //     })
    //     break;
    //   case 100:
    //   case 109:
    //     this.setState({
    //       painValue: 5,
    //       painCircleColour: '#D2712D'
    //     })
    //     break;
    //   case 110:
    //   case 119:
    //     this.setState({
    //       painValue: 6,
    //       painCircleColour: '#DD5522'
    //     })
    //     break;
    //   case 120:
    //   case 129:
    //     this.setState({
    //       painValue: 7,
    //       painCircleColour: '#E83917'
    //     })
    //     break;
    //   case 130:
    //   case 139:
    //     this.setState({
    //       painValue: 8,
    //       painCircleColour: '#F41C0B'
    //     })
    //     break;
    //   case 140:
    //   case 149:
    //     this.setState({
    //       painValue: 9,
    //       painCircleColour: '#F41C0B'
    //     })
    //     break;
    //   case 150:
    //     this.setState({
    //       painValue: 10,
    //       painCircleColour: '#FF0000'
    //     })
    //     break;
    // }
  }

  // When the touch/mouse is lifted
  handlePanResponderEnd = (e, gestureState) => {
    const {dragValue} = this.state

    // The drag is finished. Set the initialTop and initialLeft so that
    // the new position sticks. Reset offsetTop and offsetLeft for the next drag.


    this.setState({
      dragging: false,
      showPainSubmitButton: true,
    })
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 0,
    top: 0,
    borderRadius: 100/2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    color: 'white',
    fontSize: 12,
  },
  painSubmitButton: {
  }
})
