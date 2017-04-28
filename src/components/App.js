import React, { Component } from 'react';
import { StatusBar, Navigator } from 'react-native';
import Authentication from './Authentication/Authentication';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';


StatusBar.setHidden(true);
export default class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'Main' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'Main': return <Main navigator={navigator} />;
                        case 'ChangeInfo': return <ChangeInfo navigator={navigator} />;
                        case 'Authentication': return <Authentication navigator={navigator} />;
                        case 'SignIn': return <SignIn navigator={navigator} />;
                        case 'SignUp': return <SignUp navigator={navigator} />;
                        default: return <OrderHistory navigator={navigator} />;
                    }
                }}
                configureScene={route => {
                    if (route.name === 'Authentication') return Navigator.SceneConfigs.FloatFromRight;
                    return Navigator.SceneConfigs.FloatFromLeft;
                }}
            />
        );
    }
}
