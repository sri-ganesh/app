import React from 'react';
import {StyleSheet, Text, View, AlertIOS, TouchableOpacity, ScrollView} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge, List} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Modal from 'react-native-modalbox';

import HeaderComponent from '../components/HeaderComponent';
import StepComponent from '../components/StepComponent';

import ActivitiesComponent from '../components/ActivitiesComponent';

export default class DashboardScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    gesturesEnabled: screenProps.disableGestures,
  });

  constructor(props) {
    super(props);
    this.state = {
      backScore: 29,
      selections: [],
      steps: [
        {label: "Knowledge"},
        {label: "Life Gym"},
        {label: "Cold"},
        {label: "Life Gym"},
        {label: "Life Gym"},
        {label: "Life Gym"},
        {label: "Knowledge"},
        {label: "Meditation"},
      ],
    }
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

  buildSteps = (step, i) => {
    return (
      <StepComponent
        key={i}
        index={i}
        label={step.label}
        selected={this.state.selections[i]}
        onStepToggle={this.onStepToggle}
      />
    );
  }

  onStepToggle = (i, selected) => {
    let selections = this.state.selections;
    selections[i] = selected;
    this.setState({
      selections: selections
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
              {this.state.steps.map(this.buildSteps)}
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
        <Modal
          style={styles.modal}
          position={"bottom"}
          ref={"modal"}
          swipeToClose={false}
        >
          <ScrollView>
            <View>
              <ActivitiesComponent />
            </View>
          </ScrollView>
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
