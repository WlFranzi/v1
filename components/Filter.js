

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import FilterBox from './FilterBox.js';

import LinearGradient from 'react-native-linear-gradient';


export default class Filter extends Component {

    render() {
        return (
            <LinearGradient 
                    style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around',height: 75}}  
                    colors={['#CE393D', '#AD1C20']}>

                        <FilterBox name='West' filterBy={this.props.filterBy} tap={this.props.tap}/>
                        <FilterBox name='Central' filterBy={this.props.filterBy} tap={this.props.tap}/>
                        <FilterBox name='North' filterBy={this.props.filterBy} tap={this.props.tap}/>
            </LinearGradient>

        )
    }
}