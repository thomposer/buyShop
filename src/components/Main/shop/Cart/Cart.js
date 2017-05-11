import React, { Component } from 'react';
import { Navigator } from 'react-native';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';

class Cart extends Component {
    
    render() {
       const { cartArray } = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'CartView' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CartView': return <CartView navigator={navigator} cartArray={cartArray} />;
                        default: return <ProductDetail navigator={navigator} />;
                    }
                }
                }
            />
        );
    }
}

export default Cart;

