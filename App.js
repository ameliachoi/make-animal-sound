import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AnimalList from './src/screens/AnimalList';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [language, setLanguage] = useState('ko');
  const [fontsLoaded] = useFonts({
    BMJUA: require('./assets/fonts/BMJUA_ttf.ttf'),
    NUNITO: require('./assets/fonts/Nunito-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null
  }
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} language={language} setLanguage={setLanguage} />}
        </Stack.Screen>
        <Stack.Screen name="AnimalList">
          {(props) => <AnimalList {...props} language={language} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}