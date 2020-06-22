import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import profileNavigator from './profileStack';
import homeNavigator from './homeStack';

const Drawer = createDrawerNavigator();

export default function drawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={homeNavigator} />
        <Drawer.Screen name="Profile" component={profileNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
