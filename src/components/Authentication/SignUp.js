import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class SignUp extends Component {

    
    render() {
        const { inputStyle, boderBottom, textSignInStyle } = styles;
        return (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your name" underlineColorAndroid='transparent' />
                <TextInput style={inputStyle} placeholder="Enter your email" underlineColorAndroid='transparent' />
                <TextInput style={inputStyle} placeholder="Enter your Password" underlineColorAndroid='transparent' />
                <TextInput style={inputStyle} placeholder="Re-enter your Password" underlineColorAndroid='transparent' />
                <TouchableOpacity style={boderBottom}>
                    <Text style={textSignInStyle}> Sign Up Now </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

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
