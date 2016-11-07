
import React, { Component } from 'react';
import {
  Text,
  View,
  ListView, 
  StatusBar
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class Fitness extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        /*Beware Hack: ListView doesn't scroll all the way down to the last member of the list,
            so solution is to adjust the height of the outermost View (of this widget) so everything fits*/
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle='light-content'/>
                <View style={{backgroundColor: 'black', height: 24}}></View>
                <LinearGradient
                    style={{alignItems: 'center', justifyContent: 'center', height: 75}}
                    colors={['#870508', '#AD1C20']}>
                        <Text style={{fontFamily: 'Avenir', fontSize: 24, color: '#FD9093'}}>Fitness</Text>
                </LinearGradient>

                {/*<ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow} >*/}
            </View>
        );
    }
}

