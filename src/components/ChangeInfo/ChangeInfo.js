import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import icBack from '../../media/appicon/backs.png';

export default class ChangeInfo extends Component {
    gobackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const { container, header, title, imageBack, changeInfo,
            inputStyle, boderBottom, textSignInStyle, warpper } = styles;
        return (
            <View style={warpper}>
                <View style={header}>
                    <View style={{ width: 30 }} />
                    <Text style={title}>User Infomation</Text>
                    <TouchableOpacity onPress={this.gobackToMain.bind(this)}>
                        <Image style={imageBack} source={icBack} />
                    </TouchableOpacity>
                </View>
                <View style={container}>
                    <View style={changeInfo}>
                        <TextInput style={inputStyle} value="Ten" underlineColorAndroid='transparent' />
                        <TextInput style={inputStyle} value="Dia chi" underlineColorAndroid='transparent' />
                        <TextInput style={inputStyle} value="sdt" underlineColorAndroid='transparent' />
                        <TouchableOpacity style={boderBottom}>
                            <Text style={textSignInStyle}> Change You Infomation </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    warpper: {
        flex: 1,
        backgroundColor: '#F3F3F3',

    },
    header: {
        backgroundColor: '#26b391',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageBack: {
        height: 30,
        width: 30
    },
    title: {
        color: '#FFF',
        fontSize: 20
    },
    inputStyle: {
        height: 45,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 20,
        paddingLeft: 20,
        borderColor: '#26b391',
        borderWidth: 1
    },
    boderBottom: {
        borderRadius: 20,
        backgroundColor: '#26b391',
        alignItems: 'center',
        paddingVertical: 15,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    textSignInStyle: {
        color: '#fff',
        fontSize: 16
    },
    changeInfo: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    }, 
    container: {
        flex: 9,
        justifyContent: 'center'
    }
});
