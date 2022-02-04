import React, { FC, useEffect, useRef, useState } from 'react';
import { TextInput, View, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface IProps {
    iconHidden: ImageSourcePropType;
    iconShowed: ImageSourcePropType;
    placeholderText: string;
    margin: {
        marginBottom: number;
    };
    value: string;
    setText: (string: string) => void;
    onBlur: () => Promise<void>;
}

export const PasswordInput: FC<IProps> = ({ iconHidden, iconShowed, placeholderText, margin, value, setText, onBlur }) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [icon, setIcon] = useState<ImageSourcePropType>(iconHidden);

    useEffect(() => {
        isHidden ? setIcon(iconHidden) : setIcon(iconShowed)
    }, [isHidden]);

    return (
        <View style={[styles.container, margin]}>
            <TextInput
                style={styles.authenticationInput}
                placeholder={placeholderText}
                placeholderTextColor={'rgb(255, 255, 255)'}
                secureTextEntry={isHidden}
                onChangeText={setText}
                value={value ? value : ''}
                onBlur={onBlur}
            />
            <TouchableOpacity style={styles.inputIcon} onPress={() => setIsHidden(!isHidden)}>
                <Image style={styles.iconImg} source={icon} />
            </TouchableOpacity>
        </View>
    );
}