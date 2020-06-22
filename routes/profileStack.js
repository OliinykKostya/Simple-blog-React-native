import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from "../screens/profile";
import Header from '../shared/header'

const Stack = createStackNavigator()

export default function aboutNavigator({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='profile'
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{
          headerTitle: () => <Header
            navigation={navigation}
            title={'Profile'}
          />,
        }}
      />
    </Stack.Navigator>
  );
}
