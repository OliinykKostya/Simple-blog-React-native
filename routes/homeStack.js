import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../screens/home";
import Comments from "../screens/comments";
import Header from '../shared/header'
import Author from '../screens/author'

const Stack = createStackNavigator()

export default function homeNavigator({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        fontSize: 1,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerTitle: () => <Header
            navigation={navigation}
            title={'Simple Blog'}
          />,
        }}
      />

      <Stack.Screen
        name='Comments'
        component={Comments}
        options={{
          title: 'Comments'
        }}
      />

      <Stack.Screen
        name='Author'
        component={Author}
        options={{
          title: 'Author'
        }}
      />
    </Stack.Navigator>
  );
}
