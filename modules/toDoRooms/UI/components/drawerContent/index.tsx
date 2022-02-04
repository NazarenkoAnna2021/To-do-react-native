import React, { FC, useContext } from "react";
import { Switch, Text, View } from "react-native";
import RadioForm from 'react-native-simple-radio-button';
import { LocalizationContext } from "../../../../../src/localization";
import { ILanguages } from "../../../../../src/localization/entities/ILanguages";

export const DrawerContent: FC = () => {
    const LocalContext = useContext(LocalizationContext);
    
    return (
        <>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <Text>{LocalContext.translations.THEME_SWITCH_TITLE}</Text>
                <Switch />
            </View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <Text>{LocalContext.translations.LANGUAGE_RADIO_BUTTON_TITLE}</Text>
                <RadioForm
                    radio_props={LocalContext.translations.LANGUAGES_NAMES}
                    initial={LocalContext.language}
                    onPress={(value: ILanguages) => { LocalContext.setLanguage(value) }}
                    buttonColor={'#000'}
                    selectedButtonColor={'#000'}
                />
            </View>
        </>
    );
}