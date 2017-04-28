import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const { width, height } = Dimensions.get('window');

class Collection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center', paddingTop: 5 }}>
                    <Text style={textStyle}>LIST CATEGORY</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Swiper width={imageWidth} height={imageHeight}>
                        <Image source={littleIcon} style={imageStyle}>
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                        <Image source={maxiIcon} style={imageStyle} >
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                        <Image source={partyIcon} style={imageStyle} >
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                    </Swiper>
                </View>
            </View>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAFAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }

});
export default Collection;
