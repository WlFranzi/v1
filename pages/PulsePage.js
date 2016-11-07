

import React, { Component } from 'react';
import {
  Text,
  View,
  ListView, 
  StatusBar
} from 'react-native';


export default class PulsePage extends Component {

    render() {
        return(
            <View style={{flex: 1}}>
                <StatusBar barStyle='light-content'/>
                <View style={{backgroundColor: 'black', height: 24}}></View>
            </View>
        );
    }
}