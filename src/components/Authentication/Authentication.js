import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
    gobackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0079ff' }}>
                <Text>Authentication component</Text>

                <TouchableOpacity onPress={this.gobackToMain.bind(this)}>
                   <Text>Go back to main component</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
