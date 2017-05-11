import { AsyncStorage } from 'react-native';

const saveCart = async (cartArray) => {
        await AsyncStorage.setItem('@cart', JSON.stringify(cartArray));
        console.log('---save---');
        console.log(AsyncStorage.getItem('@cart'));
        console.log('---save---');
};
export default saveCart;
