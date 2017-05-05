import React, { Component } from 'react';
import { Navigator } from 'react-native';
import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';

class Cart extends Component {
    
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'CartView' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CartView': return <SearchView navigator={navigator} />;
                        default: return <ProductDetail navigator={navigator} />;
                    }
                }
                }
            />
        );
    }
}

export default Cart;
