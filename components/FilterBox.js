

import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text,
    View
} from 'react-native';


export default class FilterBox extends Component {
    render() {
        let highlight;
        if (this.props.filterBy === this.props.name) {
            highlight = {boxStyle: {backgroundColor: '#FD9093'}, textStyle: {color: '#870508', fontFamily: 'Avenir'}};
        } else {
            highlight = {boxStyle: {}, textStyle: {color: '#FD9093', fontFamily: 'Avenir'} }
        }

        return(
            <TouchableHighlight
                style={[{justifyContent: 'center', alignItems: 'center', height: 30, width: 75, borderColor: '#FD9093', borderWidth: 1, borderRadius: 2}, highlight.boxStyle]}
                onPress={() => this.props.tap(this.props.name)}>
                    <Text style={highlight.textStyle}>{this.props.name}</Text>
            </TouchableHighlight>
        ); 
    }
}