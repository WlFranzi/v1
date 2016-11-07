

import React, { Component } from 'react';
import {
  TabBarIOS, 
  Text
} from 'react-native';

import Fetcher from './Fetcher.js';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab : "Dining"};
        
    }

    render() {
        return(
            <TabBarIOS tintColor='#CE393D'>
                <Icon.TabBarItemIOS
                    iconName={'ios-pizza'}
                    title="Dining"
                    selected={this.state.selectedTab == "Dining"}
                    onPress={() => this.setState({selectedTab: "Dining"})}>
                        
                        <Fetcher
                            display={"Dining"}
                            {...this.props}/>

                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    iconName={'ios-pulse'}
                    title="Fitness"
                    selected={this.state.selectedTab == "Fitness"}
                    onPress={() => this.setState({selectedTab: "Fitness"})}>
                        
                        <Fetcher 
                            display={"Fitness"}
                            {...this.props}/>
                        
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        )
    }
}