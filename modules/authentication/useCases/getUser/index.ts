import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUser = async () => {
    try {
        const userData: string = await AsyncStorage.getItem('userData');
        return userData != null ? JSON.parse(userData) : null;
    } catch (e) {
        alert(e.massage);
    }
}