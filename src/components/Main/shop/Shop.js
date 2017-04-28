import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

import icHome from '../../../media/appicon/home0.png';
import icHomeSelected from '../../../media/appicon/home.png';
import icCart from '../../../media/appicon/cart0.png';
import icCartSelected from '../../../media/appicon/cart.png';
import icContact from '../../../media/appicon/contact0.png';
import icContactSelected from '../../../media/appicon/contact.png';
import icSearch from '../../../media/appicon/search0.png';
import icSearchSelected from '../../../media/appicon/search.png';

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' };
    }
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        const { iconStyle } = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={icHome} style={iconStyle} />}
                        renderSelectedIcon={
                            () => <Image source={icHomeSelected} style={iconStyle} />
                        }
                        selectedTitleStyle={{ color: '#26b391' }}
                    >
                        {<Home />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        renderIcon={() => <Image source={icContact} style={iconStyle} />}
                        renderSelectedIcon={
                            () => <Image source={icContactSelected} style={iconStyle} />
                        }
                        badgeText="1"
                        selectedTitleStyle={{ color: '#26b391' }}
                    >
                        {<Contact />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={icCart} style={iconStyle} />}
                        renderSelectedIcon={
                            () => <Image source={icCartSelected} style={iconStyle} />
                        }
                        selectedTitleStyle={{ color: '#26b391' }}
                    >
                        {<Cart />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        renderIcon={() => <Image source={icSearch} style={iconStyle} />}
                        renderSelectedIcon={
                            () => <Image source={icSearchSelected} style={iconStyle} />
                        }
                        selectedTitleStyle={{ color: '#26b391' }}
                    >
                        {<Search />}
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    iconStyle: {
        width: 20,
        height: 20
    }
});
