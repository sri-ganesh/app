import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Body} from 'native-base';

import HeaderComponent from '../components/HeaderComponent';
import ActivityListComponent from '../components/ActivityListComponent';
import ActivityExercisePreviewComponent from '../components/ActivityExercisePreviewComponent';
import MindfulnessPreviewComponent from '../components/MindfulnessPreviewComponent';

export default class ActivitiesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {header: "Life Gym", contents: ["Camel", "Sciatic Flossing", "Sitting Wobble", "Standing Wobble", "Wagging Tail", "Wall Lean", "Hamstring Strech", "Glut Strech", "Hip Flexor Strech", "Crufifix Wobble", "Crucifix Strech"]},
        {header: "Daily Gym", contents: ["10 Minute Session", "New 10 Minute Session"]},
        {header: "Mindfulness Meditation", contents: ["1 minute", "3 minute", "10 minute"]},
        {header: "Knowledge", contents: ["No.1", "No.2", "No.3", "No.4", "No.5", "Next Knowledge piece"]},
        {header: "Personal Choice", contents: ["cold pack", "osteopath", "Prescription", "self massage", "Massage"]},
      ],
      activities: [
        {header: "Glut Strech"},
        {header: "Camel"},
        {header: "Hip Hindge"},
      ],
      MindfulnessActivities: [
        {header: "10 minute Meditation"},
        {header: "short Meditation"},
        {header: "Coping Space"},
      ]
    };
  }

  populateActivityLists = () => {
    return this.state.sections.map(function(section, i){
      return (
        <ActivityListComponent
          key={i}
          header={section.header}
          contents={section.contents}
        />
      );
    });
  }

  populateActivities = () => {
    return this.state.activities.map(function(activity, i){
      return (
        <ActivityExercisePreviewComponent
          key={i}
          header={activity.header}
        />
      );
    });
  }

  populateMindfulnessActivities = () => {
    return this.state.MindfulnessActivities.map(function(MindfulnessActivity, i){
      return (
        <MindfulnessPreviewComponent
          key={i}
          header={MindfulnessActivity.header}
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
          title = "activities"
          displayHomeButtons={true}
        />

        <Content>
          {this.populateActivityLists()}
          {this.populateActivities()}
          {this.populateMindfulnessActivities()}
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({

});
