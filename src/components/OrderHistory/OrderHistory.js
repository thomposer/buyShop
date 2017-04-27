import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ChangeHistory extends Component {
    gobackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#e0f4ce' }}>
                <Text>ChangeHistory component</Text>

                 <TouchableOpacity onPress={this.gobackToMain.bind(this)}>
                   <Text>Go back to main component</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
