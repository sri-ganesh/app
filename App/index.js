import React, {Component} from 'react';

import { Root } from './router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  //https://gist.github.com/ronnyhartenstein/1ef30c90f530f99430969925198d6970
  render() {
    const {isLoggedIn} = this.state;

    return (
      <Root />
    );
  }
}
