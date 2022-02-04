import AsyncStorage from '@react-native-async-storage/async-storage';

interface IParams {
    value: {
        email: string;
        password: string;
    }
}

export const storeUser = async (value: IParams) => {
    try {
        const userData = JSON.stringify(value);
        await AsyncStorage.setItem('userData', userData);
    } catch (e) {
        console.log(e.massage);
    }
};