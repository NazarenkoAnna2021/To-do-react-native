import React, { FC } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from "../../../modules/toDoRooms/homePage";
import { Menu } from "../../../modules/toDoRooms/menu";

export const TabHomeNavigation: FC = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Menu" component={Menu} />
        </Tab.Navigator>
    );
}
