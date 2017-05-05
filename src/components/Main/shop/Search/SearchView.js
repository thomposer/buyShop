import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class CartView extends Component {
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'ProductDetail' });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#009943' }}>
                <Text>
                   Search Component
                </Text>
                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                    <Text>Go to detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default CartView;