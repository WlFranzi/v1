import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';



export default class Chart extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', 'margin': 10, paddingLeft: 10}}>
        {this.props.hours.map((hour, el) => <Columns key={el} hour={hour} /> )}
      </View>
    );
  }
}

// Get rid of this later. This is fake data. Real Data will come from Parent Compoent.
Chart.defaultProps = {
  hours: [12, 70, 33, 50, 80, 100, 70]
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
      <View style={{}}>
        <View style = {{height: 100-data, backgroundColor: '#f6f6f6', width: 30}} />
        <View style={this._render_color()} />
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


