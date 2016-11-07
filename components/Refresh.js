

import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class Refresh extends Component {
    
    render() {
        return(
            <View>
                <LinearGradient 
                        style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'center',height: 75}}  
                        colors={['#CE393D', '#AD1C20']}>

                            <TouchableHighlight
                                style={[{justifyContent: 'center', alignItems: 'center', height: 30, width: 75, borderColor: '#FD9093', borderWidth: 1, borderRadius: 2}]}
                                onPress={() => this.props.refresh()}>
                                    <Text style={{color: '#FD9093', fontFamily: 'Avenir'}}>Refresh</Text>
                            </TouchableHighlight>
                </LinearGradient>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Avenir', fontSize: 17}}>Oh Snap! Data got stuck in the cloud. Please refresh and try again.</Text>
                </View>
            </View>

            


        );
            
    }
}