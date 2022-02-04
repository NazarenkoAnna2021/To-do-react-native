import React, { FC } from 'react';
import { TextInput, View, Image, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

interface IProps {
    icon: ImageSourcePropType;
    placeholderText: string;
    margin: {
        marginBottom: number;
    };
    value: string;
    setText: (string: string) => void;
    onBlur: () => Promise<void>;
}

export const AuthenticationInput: FC<IProps> = ({ icon, placeholderText, margin, value, setText, onBlur }) => {
    return (
        <View style={[styles.container, margin]}>
            <TextInput
                style={styles.authenticationInput}
                placeholder={placeholderText}
                placeholderTextColor={'rgb(255, 255, 255)'}
                onChangeText={setText}
                value={value ? value : ''}
                onBlur={onBlur}
            />
            <Image style={styles.inputIcon} source={icon} />
        </View>
    );
}