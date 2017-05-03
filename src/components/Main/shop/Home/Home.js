import React, { Component } from 'react';
import { Navigator } from 'react-native';
import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

class Home extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'HomeView' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HomeView': return <HomeView navigator={navigator} />;
                        case 'ProductDetail': return <ProductDetail navigator={navigator} />;
                        default: return <ListProduct navigator={navigator} />;
                    }
                }
                }
            />
        );
    }
}

export default Home;
