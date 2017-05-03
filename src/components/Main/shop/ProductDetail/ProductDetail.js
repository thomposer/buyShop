import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ProductDetail extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#7b619e' }} >
                <Text onPress={this.goBack.bind(this)}>goBack</Text>
            </View>
        );
    }
}

export default ProductDetail;
