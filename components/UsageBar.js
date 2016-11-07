

import React, {Component} from 'react';

import {View} from 'react-native';

export default class UsageBar extends Component {

    getBarStyle() {
        let barStyle = {
          height: this.props.outerBarHeight, // because we want inner bar and outer bar to be same height
          width: this.props.outerBarWidth * this.props.ratio
        }

        if (this.props.ratio >= .7) {
          barStyle['backgroundColor'] = '#F46780';
        } else if (this.props.ratio >= .4) {
          barStyle['backgroundColor'] = '#FFDF6B';
        } else {
          barStyle['backgroundColor'] = '#89E761';
        }
        
        return barStyle;
  
    }

    render() { 
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <View style={{width: this.props.outerBarWidth, height: this.props.outerBarHeight, backgroundColor: '#F2F2F2'}}>
              <View style={this.getBarStyle()}>
              </View>
            </View>
          </View>
        );
    }
}

UsageBar.defaultProps = {
  outerBarWidth: 50,
  outerBarHeight: 7
}

UsageBar.propTypes = {
    ratio: React.PropTypes.number.isRequired
}

