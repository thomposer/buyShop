import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import map from '../../../../media/appicon/map.png';
import location from '../../../../media/appicon/location.png';
import phone from '../../../../media/appicon/phone.png';
import mail from '../../../../media/appicon/mail.png';
import message from '../../../../media/appicon/message.png';

const width = Dimensions.get('window');
const widthScreen = width - 10;
class Contact extends Component {
    render() {
        const { container, imgMap, containInfo, row, icon, textInfo } = styles;
        return (
            <View style={{ backgroundColor: '#DBDBDB', flex: 1, }}>
                <View style={container}>
                    <Image style={imgMap} source={map} />
                    <View style={containInfo}>
                        <View style={row}>
                            <Image style={icon} source={location} />
                            <Text style={textInfo}> 148 duong 3/2, Da Nang</Text>
                        </View>
                         <View style={row}>
                            <Image style={icon} source={phone} />
                            <Text style={textInfo}> 0120111222</Text>
                        </View>
                         <View style={row}>
                            <Image style={icon} source={mail} />
                            <Text style={textInfo}> nguyenvanvy09i2.cit@gmail.com</Text>
                        </View>
                         <View style={[row, { borderBottomWidth: 0 }]}>
                            <Image style={icon} source={message} />
                            <Text style={textInfo}> 0120111222</Text>
                        </View>
                        
                    </View>
                </View>
            </View>
        );
    }
}

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    imgMap: {
        width: widthScreen,
        height: 250
    },
    containInfo: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'

    },
    icon: {
        width: 30,
        height: 30
    },
    textInfo: {
        color: '#b34a80',
        fontWeight: '500'
    }
});
