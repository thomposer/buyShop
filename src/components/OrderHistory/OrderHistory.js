import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import icBack from '../../media/appicon/backs.png';

export default class ChangeHistory extends Component {
    gobackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const { container, header, imageBack, title, order, orderRow, 
            textLeftStyle, row1Style, row2Style, row4Style, row3Style } = styles;
        return (
            <ScrollView style={container} showsVerticalScrollIndicator={false}>
                <View style={header}>
                    <View style={{ width: 30 }} />
                    <Text style={title}>Order History</Text>
                    <TouchableOpacity onPress={this.gobackToMain.bind(this)}>
                        <Image style={imageBack} source={icBack} />
                    </TouchableOpacity>
                </View>
                <View style={order}>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Order id:</Text>
                        <Text style={row1Style}>ORD15</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>OrderTime:</Text>
                        <Text style={row2Style}>2017-04-19 08:30:13</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Status:</Text>
                        <Text style={row3Style}>Pending</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Total:</Text>
                        <Text style={row4Style}>392$</Text>
                    </View>
                </View>

                <View style={order}>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Order id:</Text>
                        <Text style={row1Style}>ORD15</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>OrderTime:</Text>
                        <Text style={row2Style}>2017-04-19 08:30:13</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Status:</Text>
                        <Text style={row3Style}>Pending</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Total:</Text>
                        <Text style={row4Style}>392$</Text>
                    </View>
                </View>

                <View style={order}>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Order id:</Text>
                        <Text style={row1Style}>ORD15</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>OrderTime:</Text>
                        <Text style={row2Style}>2017-04-19 08:30:13</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Status:</Text>
                        <Text style={row3Style}>Pending</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Total:</Text>
                        <Text style={row4Style}>392$</Text>
                    </View>
                </View>

                <View style={order}>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Order id:</Text>
                        <Text style={row1Style}>ORD15</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>OrderTime:</Text>
                        <Text style={row2Style}>2017-04-19 08:30:13</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Status:</Text>
                        <Text style={row3Style}>Pending</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Total:</Text>
                        <Text style={row4Style}>392$</Text>
                    </View>
                </View>

                <View style={order}>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Order id:</Text>
                        <Text style={row1Style}>ORD15</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>OrderTime:</Text>
                        <Text style={row2Style}>2017-04-19 08:30:13</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Status:</Text>
                        <Text style={row3Style}>Pending</Text>
                    </View>
                    <View style={orderRow}>
                        <Text style={textLeftStyle}>Total:</Text>
                        <Text style={row4Style}>392$</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3'
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
    order: {
        backgroundColor: '#FFF',
        margin: 10,
        padding: 5
    },
    orderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    textLeftStyle: {
        color: '#a5a5a5',
        fontWeight: 'bold'
    },
    row1Style: {
        color: '#7ed1bd',
        fontWeight: 'bold',
        fontSize: 12
    },
    row2Style: {
        color: '#c94a88',
    },
    row3Style: {
        color: '#7ed1bd',
        fontSize: 12
    },
    row4Style: {
        color: '#c94a88',
        fontWeight: 'bold'
    }
});
