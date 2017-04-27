import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Menu extends Component {
    gotoAuthen() {
        const { navigator } = this.props;
        navigator.push({ name: 'Authentication' });
    }

    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'ChangeInfo' });
    }

    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'OrderHistory' });
    }

    closeControlPanel = () => {
        this.drawer.close();
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#e22257' }}>
                <Text>Menu component</Text>
                <TouchableOpacity onPress={this.gotoAuthen.bind(this)}>
                    <Text>Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)} >
                    <Text>Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)} >
                    <Text>OrderHidtory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
