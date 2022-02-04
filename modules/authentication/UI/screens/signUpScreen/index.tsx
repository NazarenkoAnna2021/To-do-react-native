import React, { FC, useState, useEffect } from "react";
import { View, ImageBackground } from "react-native";
import { AuthenticationInput } from "../../components/authenticationInput";
import { PasswordInput } from "../../components/passwordInput";
import { TermsCheckBox } from "../../components/termsCheckBox";
import { UserAvatar } from '../../components/userAvatar';
import { AuthenticationButton } from "../../components/authenticationButton";
import { styles } from "./styles";
import { AuthenticationTransitionText } from "../../components/authenticationTransitionText";
import { NavigationProp } from "@react-navigation/native";
import { storeUser } from "../../../useCases/storeUser";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TabHomeNavigation } from "../../../../../src/navigation/tabHomeNavigation";

interface IProps {
    navigation: NavigationProp<any>
};

interface IUserData {
    value: {
        email: string;
        password: string;
    }
}

export const SignUpScreen: FC<IProps> = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [inputUserName, setInputUserName] = useState<string>(null);
    const [inputEmail, setInputEmail] = useState<string>(null);
    const [inputPassword, setInputPassword] = useState<string>(null);

    const getUser = async (): Promise<void> => {
        try {
            const userData: IUserData = JSON.parse(await AsyncStorage.getItem('userData'));
            setInputEmail(userData.value.email);
            setInputPassword(userData.value.password);
        } catch (e) {
            alert(e.massage);
        }
    }

    useEffect((): void => {
        getUser();
    }, []);

    const openScreen = (key: string): void => {
        navigation.navigate(key);
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
                <UserAvatar margin={styles.avatarMargin} />
                <AuthenticationInput
                    icon={require('../../../../../assets/inputUser.png')}
                    placeholderText={'User name'}
                    margin={styles.inputMargin}
                    value={inputUserName}
                    setText={setInputUserName}
                    onBlur={resetStorage}
                />
                <AuthenticationInput
                    icon={require('../../../../../assets/mail.png')}
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
                <TermsCheckBox text="I read and agree to Terms & Conditions" isChecked={isChecked} onPress={setIsChecked} />
            </View>
            <View style={styles.exceptArea}>
                <AuthenticationButton text="sign up" onPress={() => openScreen('SignIn')} />
                <AuthenticationTransitionText text={'Already have an account? Sign in'} onPress={() => openScreen('SignIn')} />
            </View>
        </View>
    );
}