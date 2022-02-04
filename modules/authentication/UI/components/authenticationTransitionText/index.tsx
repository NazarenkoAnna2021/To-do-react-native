import React, { FC } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { NavigationProp } from "@react-navigation/native";

interface IProps {
    text: string;
    onPress: () => void
}

export const AuthenticationTransitionText: FC<IProps> = ({ text, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.exceptButton} onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}