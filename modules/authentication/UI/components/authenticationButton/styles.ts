import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        height: 55,
        backgroundColor: '#3366ff',
        borderRadius: 5
    },
    exceptButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '500',
        textTransform: 'uppercase'
    }
});