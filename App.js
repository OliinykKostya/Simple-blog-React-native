import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@expo-google-fonts/inter';
import drawerNavigator from './routes/drawer';
import { AppLoading } from 'expo';

const Stack = createStackNavigator();


function App() {
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if(fontsLoaded) {
    return (
      drawerNavigator()
    );
  }else {
    return (
      <AppLoading/>
    )
  }
}

export default App;
