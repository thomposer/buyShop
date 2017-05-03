import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import icMenu from '../../../media/appicon/ic_menu.png';
import icLogo from '../../../media/appicon/ic_logo.png';

const { height } = Dimensions.get('window');

class Header extends Component {

    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper} >
                <View style={row1} >
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle} underlineColorAndroid='transparent'>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput 
                style={textInput}
                placeholder="What do you want to buy?" 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { height: height / 8, backgroundColor: '#26b391', padding: 10, justifyContent: 'space-around' },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    titleStyle: { color: '#FFF', fontSize: 20 },
    textInput: { height: height / 25, backgroundColor: '#FFF', paddingLeft: 10 },
    iconStyle: { height: 25, width: 25 }
});
export default Header;
