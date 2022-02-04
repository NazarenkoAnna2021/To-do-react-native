import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '95%',
        height: 45,
        marginBottom: 20
    },
    authenticationInput: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
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
        zIndex: 100,
        height: 25,
        width: 25,
        right: 20,
        backgroundColor: 'rd'
    },
    iconImg: {
        height: '100%',
        width: '100%',
    }
});