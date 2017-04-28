import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg';

const { width, height } = Dimensions.get('window');
class Collection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center', paddingTop: 5 }}>
                    <Text style={textStyle}>SPRING Collection</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Image source={bannerImage} style={imageStyle} />
                </View>

            </View>
        );
    }
}
const imageWidth = width - 40; 
const imageHeight = (imageWidth / 933) * 465; 
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
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
        width: imageWidth
    }

});
export default Collection;
