import React, { FC } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface IProps {
    text: string;
    onPress: () => void;
}

export const AuthenticationButton: FC<IProps> = ({ text, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.exceptButton} onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}