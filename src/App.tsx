import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { ContainerNavigator } from './navigation/containerNavigator';
import { StyleSheet } from 'react-native';
import { LogBox } from 'react-native';
import { LocalizationProvider } from './localization'

LogBox.ignoreLogs([
    "If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation",
]);

export const App: FC = () => {
    return (
        <LocalizationProvider >
            <SafeAreaView style={styles.container}>
                <ContainerNavigator />
            </SafeAreaView>
        </LocalizationProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});