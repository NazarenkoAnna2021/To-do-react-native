import React, { FC, useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from "../../../modules/authentication/UI/screens/signInScreen";
import { SignUpScreen } from "../../../modules/authentication/UI/screens/signUpScreen";
import { DrawerHomeNavigation } from "../drawerHomeNavigation";
import { getUser } from "../../../modules/authentication/useCases/getUser";
import { TabHomeNavigation } from "../tabHomeNavigation";

export const StackAuthenticationNavigator: FC = () => {
    const Stack = createNativeStackNavigator();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        if (getUser()) {
            setIsAuthorized(true);
        }
    }, [])

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthorized ? (
                <Stack.Screen name="HomePage" component={DrawerHomeNavigation} />
            ) : (
                <>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUn" component={SignUpScreen} />
                </>
            )
            }
        </Stack.Navigator>
    );
}