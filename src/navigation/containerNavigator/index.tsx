import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackAuthenticationNavigator } from '../stackAuthenticationNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';


const Stack = createNativeStackNavigator();
export const ContainerNavigator = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <StackAuthenticationNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
}