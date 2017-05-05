import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

class CartView extends Component {
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'ProductDetail' });
    }
    render() {
        const {
            container, wrapper,
            product, productImage, productInfo, titleProduct,
            priceProduct, bottomProduct, bottom, number,
            showDetail, buttonDelete, topStyle, totalCart } = styles;
        return (
            <View style={container} >
                <ScrollView style={wrapper} showsVerticalScrollIndicator={false}>

                    <View style={product}>
                        <Image style={productImage} source={sp1} />

                        <View style={productInfo}>
                            <View style={topStyle}>
                                <TouchableOpacity>
                                    <Text style={titleProduct}> Lace Sleeeve Si</Text>
                                </TouchableOpacity>
                                <Text style={buttonDelete}>X</Text>
                            </View>
                            <Text style={priceProduct}> 117$</Text>
                            <View style={bottomProduct}>
                                <View style={bottom}>
                                    <TouchableOpacity>
                                        <Text> +</Text>
                                    </TouchableOpacity>
                                    <Text style={number}> 1</Text>
                                    <TouchableOpacity>
                                        <Text> -</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>
                    <View style={product}>
                        <Image style={productImage} source={sp2} />

                        <View style={productInfo}>
                            <View style={topStyle}>
                                <TouchableOpacity>
                                    <Text style={titleProduct}> Lace Sleeeve Si</Text>
                                </TouchableOpacity>
                                <Text style={buttonDelete}>X</Text>
                            </View>
                            <Text style={priceProduct}> 117$</Text>
                            <View style={bottomProduct}>
                                <View style={bottom}>
                                    <TouchableOpacity>
                                        <Text> +</Text>
                                    </TouchableOpacity>
                                    <Text style={number}> 1</Text>
                                    <TouchableOpacity>
                                        <Text> -</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>
                    <View style={product}>
                        <Image style={productImage} source={sp3} />

                        <View style={productInfo}>
                            <View style={topStyle}>
                                <TouchableOpacity>
                                    <Text style={titleProduct}> Lace Sleeeve Si</Text>
                                </TouchableOpacity>
                                <Text style={buttonDelete}>X</Text>
                            </View>
                            <Text style={priceProduct}> 117$</Text>
                            <View style={bottomProduct}>
                                <View style={bottom}>
                                    <TouchableOpacity>
                                        <Text> +</Text>
                                    </TouchableOpacity>
                                    <Text style={number}> 1</Text>
                                    <TouchableOpacity>
                                        <Text> -</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>
                    <View style={product}>
                        <Image style={productImage} source={sp4} />

                        <View style={productInfo}>
                            <View style={topStyle}>
                                <TouchableOpacity>
                                    <Text style={titleProduct}> Lace Sleeeve Si</Text>
                                </TouchableOpacity>
                                <Text style={buttonDelete}>X</Text>
                            </View>
                            <Text style={priceProduct}> 117$</Text>
                            <View style={bottomProduct}>
                                <View style={bottom}>
                                    <TouchableOpacity>
                                        <Text> +</Text>
                                    </TouchableOpacity>
                                    <Text style={number}> 1</Text>
                                    <TouchableOpacity>
                                        <Text> -</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={totalCart}>
                    <TouchableOpacity>
                        <Text style={{ color: '#fff', alignItems:'center' }}>Total 350$ checkout now</Text>
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
    wrapper: {
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    product: {
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: '#fff',
        margin: 10
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
