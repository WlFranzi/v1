

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView, 
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Chart from '../components/chart.js'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PulsePage extends Component {
    constructor(props) {
      super(props);
      this.props.onBack = this.props.onBack.bind(this);
    }

    render() {
      let rowData = this.props.passProps.rowData;
      return(
          <ScrollView style={{flex: 1}}>
              <StatusBar barStyle='light-content'/>
              <View style={{backgroundColor: 'black', height: 24}}></View>

              <LinearGradient
                style={{height: 75, justifyContent: 'center' }}
                colors={['#191919', '#4B4B4B']}>

                  
                  {/* In order to properly center the Location name while keeping the back-arrow left, I resort to the hacky css below*/}
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                    <TouchableOpacity
                      style={{flex:1}}
                      onPress={() => this.props.onBack()}>
                        <Icon name='ios-arrow-back' size={22} color='white' style={{paddingLeft: 20}}/>
                    </TouchableOpacity>

                    <View style={{flex: 10, justifyContent: 'center', flexDirection: 'row'}}>
                      <Text style={{fontSize: 19, fontFamily: 'Avenir',  color: 'white'}}>{rowData.location}</Text>
                    </View>

                    <View style={{flex:1}} /> 
                    {/* Invisible View. Sole purpose is to center the View directly above this one */}

                  </View>
              </LinearGradient>
            <Chart/>
            </ScrollView>
      );
    }
}