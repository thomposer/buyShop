import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image,
    Dimensions, TouchableOpacity
} from 'react-native';
import icBack from '../../../../media/appicon/back.png';
import icOrder from '../../../../media/appicon/cartfull.png';
import global from '../../../../components/global';

const url = 'http://localhost/app/images/product/';
class ProductDetail extends Component {

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    addThisProductToCart() {
        const { product } = this.props;
        global.addProductToCart(product);
    }
    render() {
        const { name, images, id, price, material, color, description } = this.props.product;
        const { container, wrapper, header, imgStyle, listImage,
            imageProduct, desProduct, titleProduct, priceProduct,
            topProduct, textBottom, bottom, viewColor } = styles;
        return (
            <View style={wrapper} key={id}>
                <View style={container}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image style={imgStyle} source={icBack} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.addThisProductToCart.bind(this)}>
                            <Image style={imgStyle} source={icOrder} />
                        </TouchableOpacity>
                    </View>
                    <View style={listImage}>
                        {images.map(e => (
                            <TouchableOpacity key={e.id}>
                                <Image style={imageProduct} source={{ uri: `${url}${e}` }} />
                            </TouchableOpacity>))}
                    </View>
                    <View style={topProduct}>
                        <Text style={titleProduct}> {name.toUpperCase()} </Text>
                        <Text style={priceProduct}>{price}$</Text>
                    </View>
                    <Text style={desProduct}>{description}</Text>
                    <View style={bottom}>
                        <Text style={textBottom}>Meteral {material}</Text>
                        <View style={viewColor}>
                            <Text style={textBottom}>Color {color}</Text>
                            <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: color.toLowerCase(), marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const widthScreen = (width / 2) - 30;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1, backgroundColor: '#cecece'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 4
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5
    },
    imgStyle: {
        width: 25,
        height: 25
    },
    listImage: {
        flexDirection: 'row',
        marginTop: 20

    },
    imageProduct: {
        width: widthScreen,
        height: widthScreen * 1.3,
        marginRight: 10
    },
    desProduct: {
        textAlign: 'left',
        marginLeft: 10,
        color: '#b6b6b6',
        marginTop: 25
    },
    titleProduct: {
        fontSize: 20,
        color: '#000',
        marginLeft: 15
    },
    priceProduct: {
        fontSize: 20,
        color: '#b6b6b6'
    },
    topProduct: {
        flexDirection: 'row',
        margin: 10
    },
    textBottom: {
        color: '#d05f97'
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15
    },
    viewColor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
export default ProductDetail;
