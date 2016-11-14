
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';


export default class PulsePageStatus extends Component {
    boxColor() {
        if (this.props.ratio >= .7) {
          return '#F46780';
        } else if (this.props.ratio >= .4) {
          return '#FFDF6B';
        } else {
          return'#89E761';
        }
    }

    render() {
        let rowData = this.props.rowData;

        let inside;
        if (rowData.status === "Closed") {
            inside = (<View style={{flex: 1, justifyContent: 'center', backgroundColor: '#CE393D'}}><Text style={{paddingLeft: 25, color: 'white', fontFamily: 'Avenir'}}>Closed Now.</Text></View>);
        } else {
            let boxColor = this.boxColor();
            inside = (
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width:300, alignItems: 'center', flexDirection: 'row'}}>
                        <Text style={{paddingLeft: 25, fontFamily: 'Avenir', color: '#89E761'}}>Open now: </Text> 
                        <Text style={{fontFamily: 'Avenir'}}>{this.props.timeSpan}</Text>
                    </View>
                    <View style={{width: 75, backgroundColor: boxColor, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white', fontFamily: 'Avenir', fontSize: 18}}>{ Math.min(100, Math.round(this.props.ratio * 100)) }%</Text>
                        <Text style={{marginTop: -5, color: 'white', fontFamily: 'Avenir', fontSize: 10}}>capacity</Text>
                    </View>
                </View>

            );
        }
        // debugger;
        return (
            <View style={{height: 50}}>
                {inside}
            </View>
        )
    }
}
