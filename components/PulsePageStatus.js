
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';


export default class PulsePageStatus extends Component {
    render() {
        let rowData = this.props.rowData;
        debugger;
        let statusText = rowData.status === 'Closed' ? "Closed Now." : "Open now: " + this.props.timeSpan;  
        return (
            <View
                style={{height: 50, borderColor: 'black', borderWidth: 2, flexDirection: 'row'}}>
                <View style={{width:300, borderWidth: 1, borderColor: 'purple', justifyContent: 'center'}}>
                    <Text style={{paddingLeft: 25, fontFamily: 'Avenir'}}>{statusText}</Text>
                </View>
                <View style={{width: 75, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontFamily: 'Avenir', fontSize: 18}}>{Math.round(this.props.ratio * 100)}%</Text>
                    <Text style={{marginTop: -5, color: 'white', fontFamily: 'Avenir', fontSize: 10}}>capacity</Text>
                </View>
            </View>
        )
    }
}
