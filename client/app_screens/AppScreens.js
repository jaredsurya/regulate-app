//functional imports
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//component imports
import WelcomeUser from './WelcomeUser'
import MeditateHome from './MeditateHome'
import JournalHome from './JournalHome'

export default function AppScreens() {
  //stack navigator
  const Stack = createNativeStackNavigator();


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeUser" component={WelcomeUser} />
      <Stack.Screen name="MeditateHome" component={MeditateHome} />
      <Stack.Screen name="JournalHome" component={JournalHome} />
    </Stack.Navigator>
  );
};

