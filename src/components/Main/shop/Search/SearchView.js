import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

class SearchView extends Component {
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'ProductDetail' });
    }
    render() {
        const {
            container, wrapper,
            product, productImage, productInfo, titleProduct,
            priceProduct, materialProduct, bottomProduct,
            showDetail } = styles;
       return (
            <View style={container} >
                <ScrollView style={wrapper} showsVerticalScrollIndicator={false}>
                    <View style={product}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={titleProduct}> Back Dress</Text>
                            <Text style={priceProduct}> 117$</Text>
                            <Text style={materialProduct}> Material silk</Text>
                            <View style={bottomProduct}>
                                <Text> Color RoyalBlue</Text>
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={product}>
                        <Image style={productImage} source={sp2} />
                        <View style={productInfo}>
                            <Text style={titleProduct}> Back Dress</Text>
                            <Text style={priceProduct}> 117$</Text>
                            <Text style={materialProduct}> Material silk</Text>
                            <View style={bottomProduct}>
                                <Text> Color RoyalBlue</Text>
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>

                    <View style={product}>
                        <Image style={productImage} source={sp3} />
                        <View style={productInfo}>
                            <Text style={titleProduct}> Back Dress</Text>
                            <Text style={priceProduct}> 117$</Text>
                            <Text style={materialProduct}> Material silk</Text>
                            <View style={bottomProduct}>
                                <Text> Color RoyalBlue</Text>
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>

                    <View style={product}>
                        <Image style={productImage} source={sp4} />
                        <View style={productInfo}>
                            <Text style={titleProduct}> Back Dress</Text>
                            <Text style={priceProduct}> 117$</Text>
                            <Text style={materialProduct}> Material silk</Text>
                            <View style={bottomProduct}>
                                <Text> Color RoyalBlue</Text>
                                <Text style={showDetail}> Show Details</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SearchView;
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#DBDBDB',
    },
    wrapper: {
        
    },
    product: {
        flexDirection: 'row',
        paddingVertical: 20,
        backgroundColor: '#FFF',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 2
    },
    productImage: {
        width: 75,
        height: 100,
        margin: 10,
        marginBottom: 0
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
