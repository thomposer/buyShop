import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import avatarIcon from '../../media/temp/profile.png';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogedIn: true };
    }
    gotoAuthen() {
        const { navigator } = this.props;
        navigator.push({ name: 'Authentication' });
    }

    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'ChangeInfo' });
    }

    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'OrderHistory' });
    }

    closeControlPanel = () => {
        this.drawer.close();
    };

    render() {
        const {
            container, avatart, signInStyle,
            textStyle, btnsignInStyle, viewBottomStyle } = styles;
        const logout = (
            <View>
                <TouchableOpacity style={btnsignInStyle} onPress={this.gotoAuthen.bind(this)}>
                    <Text style={textStyle}> SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
        const login = (
            <View style={viewBottomStyle}>
                <Text style={{ color: '#fff', fontSize: 15 }}>Nguyen Van Vy</Text>
                <View>
                    <TouchableOpacity
                        style={signInStyle}
                        onPress={this.gotoOrderHistory.bind(this)}
                    >
                        <Text style={textStyle}> Order Hitory</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signInStyle} onPress={this.gotoChangeInfo.bind(this)}>
                        <Text style={textStyle}> Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signInStyle} >
                        <Text style={textStyle}> Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );

        const main = this.state.isLogedIn ? login : logout;
        return (
            <View style={container}>
                <Image source={avatarIcon} style={avatart} />
                {main}
            </View>
        );
    }
}
// const widthSign = Dimensions.get(window);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26b391',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    avatart: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30
    },
    signInStyle: {
        width: 200,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10
    },
    textStyle: {
        color: '#26b391',
        fontSize: 13,

    },
    viewBottomStyle: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnsignInStyle: {
        width: 200,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    }
});
