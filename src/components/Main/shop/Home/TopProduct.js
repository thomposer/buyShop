import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const url = 'http://localhost/app/images/product/';

class TopProduct extends Component {
    gotoDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'ProductDetail', product });
    }
    render() {
        const { topProducts } = this.props;

        const { container, titleContainer, title,
            body, productStyle, productImage,
            productName, productPrice } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}> TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    {topProducts.map(e => (
                        <TouchableOpacity style={productStyle} onPress={() => this.gotoDetail(e)} key={e.id}>
                            <Image source={{ uri: `${url}${e.images[0]}` }} style={productImage} />
                            <Text style={productName}>{e.name.toUpperCase()}</Text>
                            <Text style={productPrice}> ${e.price}</Text>
                        </TouchableOpacity>
                    ))}

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
