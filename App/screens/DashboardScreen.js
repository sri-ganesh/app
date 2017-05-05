import React from 'react';
import {StyleSheet, Text, View, AlertIOS, TouchableOpacity} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge, List} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Modal from 'react-native-modalbox';

import HeaderComponent from '../components/HeaderComponent';
import StepsComponent from '../components/StepsComponent';

import ActivitiesComponent from '../components/ActivitiesComponent';

export default class DashboardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backScore: 29,
      steps: [
        {content: "Knowledge"},
        {content: "Life Gym"},
        {content: "Cold"},
        {content: "Life Gym"},
        {content: "Life Gym"},
        {content: "Life Gym"},
        {content: "Knowledge"},
        {content: "Meditation"},
      ]
    };
  }

  onBackScorePress = () => {
    AlertIOS.alert("Your backscore is: 29");
  }

  onTodayPress = () => {
    AlertIOS.alert("Today Pressed");
  }

  onYesterdayPress = () => {
    AlertIOS.alert("Yesterday Pressed");
  }

  onProgressPress = () => {
    AlertIOS.alert("Progress Pressed");
  }

  onGetStepsPress = () => {
    AlertIOS.alert("Getting Steps!");
  }

  populateStepsList = () => {
    return this.state.steps.map(function(step, i){
      return (
        <StepsComponent
          key={i}
          id={i}
          content={step.content}
          active={{false}}
        />
      );
    });
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <HeaderComponent
          navigate = {navigate}
          title = "Dashboard"
          displayHomeButtons={true}
        />
        <Grid>
          <Row size={75}>
            <List>
              {this.populateStepsList()}
            </List>
          </Row>
          <Row
            size={25}
            style={styles.bottomContainer}
          >
            <Col>
              <Row>
                <TouchableOpacity onPress={this.onBackScorePress}>
                  <View style={styles.bottomBadge}>
                    <Text>{this.state.backScore}/100</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row>
                <Button onPress={() => this.refs.modal.open()}>
                  <Text>Activities</Text>
                </Button>
              </Row>
            </Col>
            <Col>
              <Row>
                <TouchableOpacity onPress={this.onTodayPress}>
                  <View
                    style={{backgroundColor: '#E7EBEE'}}
                  >
                    <Text>Today</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row>
                <TouchableOpacity onPress={this.onProgressPress}>
                  <View
                    style={{backgroundColor: '#E7EBEE'}}
                  >
                    <Text>Progress</Text>
                  </View>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col>
              <Row>
                <TouchableOpacity onPress={this.onProgressPress}>
                  <View style={{backgroundColor: '#E7EBEE'}}>
                    <Text>Yesterday</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row>
                <TouchableOpacity onPress={this.onGetStepsPress}>
                  <View
                    style={{backgroundColor: '#E7EBEE'}}>
                    <Icon name="ios-refresh"/>
                    <Text>Steps</Text>
                  </View>
                </TouchableOpacity>
              </Row>
            </Col>
          </Row>
        </Grid>
        <Modal style={styles.modal} position={"bottom"} ref={"modal"}>
          <ActivitiesComponent />
        </Modal>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: '#CED7DD'
  },
  bottomBadge: {
    backgroundColor: '#E7EBEE',
    height: 75
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 600
  },
});
