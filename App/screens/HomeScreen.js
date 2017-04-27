import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Accordion from 'react-native-collapsible/Accordion';

import HeaderComponent from '../components/HeaderComponent';

import IntroDialogueComponent from '../components/IntroDialogueComponent';

const AccordionContent = [
  {
    title: 'Dashboard',
    content: ''
  },
  {
    title: 'Activities',
    content: '',
  }
];

export default class DashboardScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Home',
  };

  state = {
    firstTimeWelcome: true,
    activeSection: false,
    collapsed: true,
  };


  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
    return ( <Text>{section.title}</Text> );
  }

  _renderContent(section, i, isActive) {
    return (
      <View><Text>{section.content}</Text></View>
    );
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <HeaderComponent />
        <Content>
          <Grid>
            <Row>
            </Row>
            <Row>
            </Row>
          </Grid>
        </Content>
        <View>
          <Accordion
            activeSection={this.state.activeSection}
            sections={AccordionContent}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._setSection.bind(this)}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
