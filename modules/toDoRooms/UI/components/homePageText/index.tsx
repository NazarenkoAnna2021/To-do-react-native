import React, { FC, useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { LocalizationContext } from '../../../../../src/localization'

interface IProps {
    margin: {
        marginTop: number;
        marginBottom: number;
    }
}

export const HomePageText: FC<IProps> = ({ margin }) => {
    const LocalContext = useContext(LocalizationContext);
    return (
        <View style={[styles.container, margin]}>
            <Text style={styles.headerText}>{LocalContext.translations.TITLE}</Text>
        </View>
    );
}