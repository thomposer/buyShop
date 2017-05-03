import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class SignIn extends Component {
    render() {
        const { inputStyle, boderBottom, textSignInStyle } = styles;
        return (
           <View>
                <TextInput style={inputStyle} placeholder="Enter your email" underlineColorAndroid='transparent' />
                <TextInput style={inputStyle} placeholder="Enter your password" underlineColorAndroid='transparent' />
                <TouchableOpacity style={boderBottom}>
                    <Text style={textSignInStyle}> Sign In Now </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignIn;
const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 20,
        paddingLeft: 10
    },
    boderBottom: {
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 10,
        borderWidth: 0.5,
        borderColor: '#fff'
    },
    textSignInStyle: {
        color: '#fff'
    }
});
