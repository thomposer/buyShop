import React, { Component } from 'react';
import {
    View, Image, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import icMenu from '../../media/appicon/back_white.png';
import icLogo from '../../media/appicon/ic_logo.png';

class HeaderAuthen extends Component {
    gobackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const { wrapper, row1, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper} >
                <View style={row1} >
                    <TouchableOpacity onPress={this.gobackToMain.bind(this)}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        height: 50,
        backgroundColor: '#26b391',
        padding: 5,
        justifyContent: 'space-around'
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    titleStyle: { color: '#FFF', fontSize: 20 },
    iconStyle: { height: 25, width: 25 }
});
export default HeaderAuthen;
