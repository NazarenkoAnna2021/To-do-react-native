import React, { FC } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "../../../modules/toDoRooms/UI/components/drawerContent";
import { HomePage } from "../../../modules/toDoRooms/UI/screens/homePage";

export const DrawerHomeNavigation: FC = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerContent={() => <DrawerContent />}>
            <Drawer.Screen name="Home" component={HomePage} />
        </Drawer.Navigator>
    );
}
