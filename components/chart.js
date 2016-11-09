import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

var HOURS = [12, 70, 33, 50, 80, 100, 70]

export default class Chart extends Component {
    _return_by_hour() {
      var data = this.props.HOURS;
      console.log(this.props.rowData)
      return HOURS.map(function(hour, el){
        return(
         <Columns  key={el} hour={hour} />
        );
      });
    }

  render() {
      return (
        <View style={styles.column}>
          {this._return_by_hour()}
        </View>
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
  column: {
   flexDirection:'row',
   margin: 10,
   paddingLeft: 10,
  },
  barItem: {
    height: 50,
  },
  textTime: {
 }
});


