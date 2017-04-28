import React, { Component } from 'react';
import { View } from 'react-native';
import HeaderAuthen from './HeaderAuthen';
import SignIn from './SignIn';

export default class Authentication extends Component {
    
    render() {
         const { navigator } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#26b391' }}>
                <HeaderAuthen navigator={navigator} />
                <SignIn navigator={navigator} />
            </View>
        );
    }
}
