import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ListView } from 'react-native';

const url = 'http://localhost/app/images/product/';
class CartView extends Component {
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'ProductDetail' });
    }
    render() {
        const {
            container, productStyle, productImage, productInfo, titleProduct,
            priceProduct, bottomProduct, bottom, number,
            showDetail, buttonDelete, topStyle, totalCart } = styles;
        const { cartArray } = this.props;
        return (
            <View style={container} >
                <ListView
                    contentContainerStyle={container}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(cartArray)}
                    renderRow={itemCart => (
                        <View style={productStyle}>
                            <Image style={productImage} source={{ uri: `${url}${itemCart.product.images[0]}` }} />
                            <View style={productInfo}>
                                <View style={topStyle}>
                                    <TouchableOpacity>
                                        <Text style={titleProduct}> {itemCart.product.name}</Text>
                                    </TouchableOpacity>
                                    <Text style={buttonDelete}>X</Text>
                                </View>
                                <Text style={priceProduct}> {itemCart.product.price}$</Text>
                                <View style={bottomProduct}>
                                    <View style={bottom}>
                                        <TouchableOpacity>
                                            <Text> +</Text>
                                        </TouchableOpacity>
                                        <Text style={number}>{itemCart.quality}</Text>
                                        <TouchableOpacity>
                                            <Text> -</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={showDetail}> Show Details</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
                <View style={totalCart}>
                    <TouchableOpacity>
                        <Text style={{ color: '#fff', alignItems: 'center' }}>Total 350$ checkout now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default CartView;
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#DBDBDB',
    },
    header: {
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
        color: '#B10D65',
        fontSize: 20
    },
    
    productStyle: {
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    productImage: {
        width: 70,
        height: 100,
        margin: 5
    },
    productInfo: {
        marginLeft: 15,
        justifyContent: 'space-between',
        flex: 1
    },
    titleProduct: {
        color: '#c2c2c2',
        fontSize: 20
    },
    priceProduct: {
        color: '#d05f97'
    },
    bottomProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 20
    },
    showDetail: {
        color: '#dc87b1',
        fontSize: 12
    },
    buttonDelete: {
        textAlign: 'right',
        marginBottom: 10,
        marginRight: 10,
        fontSize: 13,
        color: '#c2c2c2'
    },
    topStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    bottom: {
        flexDirection: 'row'
    },
    number: {
        paddingLeft: 20,
        paddingRight: 20
    },
    totalCart: {
        height: 50,
        backgroundColor: '#26b391',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2
    }
});
