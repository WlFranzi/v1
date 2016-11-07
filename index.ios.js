/**
 * Cornell Pulse
 * https://github.com/cornellpulse/CornellPulse
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet, 
  Navigator
} from 'react-native';

import Tabs from './Tabs.js';

export default class CornellPulse extends Component {

  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    let Comp = route.component;
    return (
      <Comp
        route={route}
        navigator={navigator}
        onForward={(newComponent) => {
          let nextIndex = route.index + 1
          navigator.push({title: 'Scene ' + nextIndex, 
                          index: nextIndex, 
                          component: newComponent}); 
        }}
        onBack={() => {
          if (route.index > 0) navigator.pop();
        }} />
    );
  }

  render() {
    return (
      <Navigator
        style={{backgroundColor: 'white'}}
        initialRoute={ {title: 'Home', index:0, component: Tabs} }
        renderScene={this.renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump} />
    );
  }
}

AppRegistry.registerComponent('CornellPulse', () => CornellPulse);
