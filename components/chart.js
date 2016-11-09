import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

var HOURS = [12, 70, 33, 50, 80, 100, 70, 40, 30, 60, 80, 90, 10, 13, 15]

export default class Chart extends Component {
    _return_by_hour() {
      var data = this.props.HOURS;
      return HOURS.map(function(hour, el){
        return(
         <Columns  key={el} hour={hour} />
        );
      });
    }

  render() {
      return (
        <ScrollView contentContainerStyle={styles.contentContainerMain}>
          <Text style={styles.title}> Average Buzz today (per hour)</Text>
          <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
          {this._return_by_hour()}
          </ScrollView>
        </ScrollView>
      );
    }
}

class Columns extends Component {
  _render_color() {
    var data = this.props.hour;
    var barColor = {height: data, width: 30};
    if(data>70) {
      barColor['backgroundColor'] = '#87ceeb';
    } else if (data>30) {
      barColor['backgroundColor'] = '#9fd7ef';
    } else {
      barColor['backgroundColor'] = '#9fd7ef';
    }
    return barColor
  }

  render() {
    var data = this.props.hour;
    return (
      <View style={styles.barItem}>
        <View style = {{height: 100-data, backgroundColor: '#f6f6f6', width: 30}}>
        </View>
        <View style = {this._render_color()}>
        </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({ 
  barItem: {
    height: 100,
    margin: 3,
  },
  textTime: {
 }
});


