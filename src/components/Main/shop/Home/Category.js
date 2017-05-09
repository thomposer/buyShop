import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const url = 'http://localhost/app/images/type/';
class Collection extends Component {
    gotoListProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'ListProduct' });
    }
    render() {
        const { types } = this.props;
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center', paddingTop: 5 }}>
                    <Text style={textStyle}>LIST CATEGORY</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Swiper width={imageWidth} height={imageHeight}>
                        {types.map(e => (
                            <TouchableOpacity onPress={this.gotoListProduct.bind(this)} key={e.id}>
                                <Image source={{ uri: `${url}${e.image}` }} style={imageStyle}>
                                    <Text style={cateTitle}>{e.name}</Text>
                                </Image>
                            </TouchableOpacity>
                        ))}

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
