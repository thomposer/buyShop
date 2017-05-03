import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HeaderAuthen from './HeaderAuthen';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }

    signIn() {
        this.setState({ isSignIn: true });
    }

    signUp() {
        this.setState({ isSignIn: false });
    }
    render() {
        const {
            container, styleBottom, signIn, signUp,
            inActiveStyle, nativeStyle } = styles;
        const { navigator } = this.props;
        const signInJsx = (
            <SignIn />
        );
        const signUpJsx = (
           <SignUp />
        );
        const { isSignIn } = this.state;
        const mainJsx = isSignIn ? signInJsx : signUpJsx;

        return (
            <View style={container}>
                <HeaderAuthen navigator={navigator} />
                {mainJsx}
                <View style={styleBottom}>
                    <TouchableOpacity style={signIn} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? nativeStyle : inActiveStyle}> Sign in </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUp} onPress={this.signUp.bind(this)}>
                        <Text style={!isSignIn ? nativeStyle : inActiveStyle}> Sign up </Text>
                    </TouchableOpacity>
                </View >
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26b391',
        padding: 20,
        justifyContent: 'space-between'
    },
    styleBottom: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    signIn: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 1
    },
    signUp: {
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical: 15,
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 1,
    },
    inActiveStyle: {
        color: '#D7D7D7'
    },
    nativeStyle: {
        color: '#26b391'
    },
});
