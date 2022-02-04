import React, { FC, useEffect, useMemo, useState } from "react";
import { View, ImageBackground, Text } from "react-native";
import { AuthenticationInput } from "../../components/authenticationInput";
import { PasswordInput } from "../../components/passwordInput";
import { AuthenticationButton } from "../../components/authenticationButton";
import { styles } from "./styles";
import { AuthenticationTransitionText } from "../../components/authenticationTransitionText";
import { NavigationProp } from "@react-navigation/native";
import { SignInText } from "../../components/signInText";
import { storeUser } from "../../../useCases/storeUser";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {
    navigation: NavigationProp<any>
};

interface IUserData {
    value: {
        email: string;
        password: string;
    }
}

export const SignInScreen: FC<IProps> = ({ navigation }) => {
    const [inputEmail, setInputEmail] = useState<string>(null);
    const [inputPassword, setInputPassword] = useState<string>(null);

    useEffect(() => {
        let unmounted = false;

        async (): Promise<void> => {
            try {
                const userData: IUserData = JSON.parse(await AsyncStorage.getItem('userData'));
                if (!unmounted) {
                    setInputEmail(userData.value.email);
                    setInputPassword(userData.value.password);
                }
            } catch (e) {
                alert(e.massage);
            }
        }
        return () => { unmounted = true };
    }, []);

    const openScreen = (key: string): void => {
        navigation.navigate(key);
    };

    const authorizeUser = (): void => {
        if (inputEmail && inputPassword) {
            openScreen('HomePage');
        }
    };

    const resetStorage = async () => {
        await storeUser({
            value: {
                email: inputEmail,
                password: inputPassword
            }
        })
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../../../assets/background.jpg')} resizeMode="cover" style={styles.background} />
            <View style={styles.inputArea}>
                <SignInText margin={styles.helloText} />
                <AuthenticationInput
                    icon={require('../../../../../assets/inputUser.png')}
                    placeholderText={'Email'}
                    margin={styles.inputMargin}
                    value={inputEmail}
                    setText={setInputEmail}
                    onBlur={resetStorage}
                />
                <PasswordInput
                    iconHidden={require('../../../../../assets/crossedEye.png')}
                    iconShowed={require('../../../../../assets/eye.png')}
                    placeholderText={'Password'}
                    margin={styles.inputMargin}
                    value={inputPassword}
                    setText={setInputPassword}
                    onBlur={resetStorage}
                />
                <Text style={styles.forgotPassword}>Forgot the password?</Text>
            </View>
            <View style={styles.exceptArea}>
                <AuthenticationButton text="sign in" onPress={authorizeUser} />
                <AuthenticationTransitionText text={'Don\'t have an account? Sign up'} onPress={() => openScreen('SignUn')} />
            </View>
        </View>
    );
}