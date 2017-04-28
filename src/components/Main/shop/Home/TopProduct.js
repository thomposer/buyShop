import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

class TopProduct extends Component {
    render() {
        const { container, titleContainer, title,
            body, productStyle, productImage,
            productName, productPrice } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}> TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <View style={productStyle}>
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}> Name PRODUCT</Text>
                        <Text style={productPrice}> $400</Text>
                    </View>
                    <View style={productStyle}>
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}> Name PRODUCT</Text>
                        <Text style={productPrice}> $400</Text>
                    </View>
                    <View style={{ height: 10, width }} />
                    <View style={productStyle}>
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}> Name PRODUCT</Text>
                        <Text style={productPrice}> $400</Text>
                    </View>
                    <View style={productStyle}>
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}> Name PRODUCT</Text>
                        <Text style={productPrice}> $400</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productHeight = (productWidth / 361) * 452;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productStyle: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    productImage: {
        width: productWidth,
        height: productHeight
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        color: '#D3D3CF',
        fontWeight: '500',
        fontFamily: 'Avenir'
    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        color: '#662f90',
        fontFamily: 'Avenir'
    }
});
export default TopProduct;
