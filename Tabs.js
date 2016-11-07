

import React, { Component } from 'react';
import {
  TabBarIOS, 
  Text
} from 'react-native';

import Fetcher from './Fetcher.js';


export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab : "Dining"};
        
    }

    render() {
        return(
            <TabBarIOS tintColor='#CE393D'>
                <TabBarIOS.Item
                    title="Dining"
                    selected={this.state.selectedTab == "Dining"}
                    onPress={() => this.setState({selectedTab: "Dining"})}>
                        
                        <Fetcher
                            display={"Dining"}
                            {...this.props}/>

                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Fitness"
                    selected={this.state.selectedTab == "Fitness"}
                    onPress={() => this.setState({selectedTab: "Fitness"})}>
                        
                        <Fetcher 
                            display={"Fitness"}
                            {...this.props}/>
                        
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}