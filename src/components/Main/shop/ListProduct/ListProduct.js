import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import icBack from '../../../../media/appicon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

class ListProduct extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'ProductDetail' });
    }
    render() {
        const {
            container, header, imageBack, title, wrapper,
            product, productImage, productInfo, titleProduct,
            priceProduct, materialProduct, bottomProduct,
            showDetail } = styles;
        return (
            <View style={container} >
                <ScrollView style={wrapper} showsVerticalScrollIndicator={false}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image style={imageBack} source={icBack} />
                        </TouchableOpacity>
                        <Text style={title}>Party Dress</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <View style={product}>
                        <Image style={productImage} source={sp1} />

                        <View style={productInfo}>
                            <Text style={titleProduct}> Lace Sleeeve Si</Text>
                            <Text style={priceProduct}> 117$</Text>
                            <Text style={materialProduct}> Material silk</Text>
                            <View style={bottomProduct}>
                                <Text> Color RoyalBlue</Text>
                                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#385edc' }} />
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>
                    <View style={product}>
                        <Image style={productImage} source={sp2} />

                        <View style={productInfo}>
                            <Text style={titleProduct}> Lace Sleeeve Si</Text>
                            <Text style={priceProduct}> 117$</Text>
                            <Text style={materialProduct}> Material silk</Text>
                            <View style={bottomProduct}>
                                <Text> Color RoyalBlue</Text>
                                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#385edc' }} />
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>
                    <View style={product}>
                        <Image style={productImage} source={sp3} />

                        <View style={productInfo}>
                            <Text style={titleProduct}> Lace Sleeeve Si</Text>
                            <Text style={priceProduct}> 117$</Text>
                            <Text style={materialProduct}> Material silk</Text>
                            <View style={bottomProduct}>
                                <Text> Color RoyalBlue</Text>
                                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#385edc' }} />
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>
                    <View style={product}>
                        <Image style={productImage} source={sp4} />

                        <View style={productInfo}>
                            <Text style={titleProduct}> Lace Sleeeve Si</Text>
                            <Text style={priceProduct}> 117$</Text>
                            <Text style={materialProduct}> Material silk</Text>
                            <View style={bottomProduct}>
                                <Text> Color RoyalBlue</Text>
                                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#385edc' }} />
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ListProduct;
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
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    product: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderBottomColor: '#FFF',
        borderTopColor: '#f0f0f0',
        borderWidth: 2,
        margin: 10
    },
    productImage: {
        width: 80,
        height: 120,
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
});
