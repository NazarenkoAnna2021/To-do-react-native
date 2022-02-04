import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '95%',
    },
    authenticationInput: {
        width: '100%',
        height: 45,
        paddingLeft: 20,
        backgroundColor: '#ffffff4d',
        borderRadius: 3,
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        borderWidth: 2,
        borderColor: '#ffffff60'
    },
    inputIcon: {
        position: 'absolute',
        right: 20
    }
});