
import React, { Component } from 'react';
import {
  ActivityIndicator, 
  Text, 
  View, 
  AppState
} from 'react-native';

import Fitness from './pages/Fitness.js';
import Dining from './pages/Dining.js';


export default class Fetcher extends Component {
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.state = {allData: {}};
    }

    componentWillMount() {
        this._fetchAllData();
    }

    componentDidMount() {
        AppState.addEventListener('change', (state) => {
            if (state === 'active') {
                this.refresh();
            }
        });
    }

    refresh() {
        this.setState({allData: {}});
        this._fetchAllData();
    }

    _fetchAllData() {
        var endpoint = 'http://www.cornellpulse.com:3000/api';
        fetch(endpoint)
            .then((response) => response.json())
            .then((responseJSON) => {
                // console.log(responseJSON);
                this.setState({allData: responseJSON});
            })
            .catch((error) => { console.warn(error); });

    }

    render() {
        if (Object.keys(this.state.allData).length == 0) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontFamily: 'Avenir', color: 'black', paddingBottom: 15}}>Loading...</Text>
                    <ActivityIndicator animating={true} size='large' color='red'/>
                </View>

            )
        } else if (this.props.display === 'Dining') {
            return (<Dining refresh={this.refresh} allData={this.state.allData} {...this.props} />)
        } else if (this.props.display === 'Fitness') {
            return (<Fitness refresh={this.refresh} allData={this.state.allData} {...this.props} />)
        }
    }
}