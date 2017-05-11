import { AsyncStorage } from 'react-native';

const getCart = async () => {
    try {
        const value = await AsyncStorage.getItem('@cart');
        console.log('---get----');
        console.log(value);
        console.log('---get----');
        if (value !== null) {
            return JSON.parse(value);
        }
        return [];
    } catch (error) {
        console.log('---erorr----');
        console.log(error);
        console.log('---error----');
        return [];
    }
};
export default getCart;
