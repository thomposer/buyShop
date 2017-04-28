import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SignIn extends Component {
    gotoSignUp() {
        const { navigator } = this.props;
        navigator.push({ name: 'SignUp' });
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.gotoSignUp.bind(this)}>
                    <Text>Sign up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignIn;
