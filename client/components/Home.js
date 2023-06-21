import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Auth from './components/Auth';
import React, {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

export default function Home() {
  const [statusBarToggle, setStatusBarToggle] = useState(true)

  const handleButtonPress = () => {
    // Action to perform when the button is pressed
    console.log('Button pressed!');
  };

  useFocusEffect(useCallback(() => {
    // This will run when screen is `focused` or mounted.
    StatusBar.setHidden(true);
  
    // This will run when screen is `blured` or unmounted.
    return () => {
      StatusBar.setHidden(false);
    }
  }, []));

  return (
    <View style={styles.container}>
      <Auth />
      <Text>This is the APP component.</Text>
      <Text>Blah Blah Blah Blah Blah</Text>
      <Button title="Random button!" onPress={handleButtonPress} />
      <StatusBar style="light" />
    </View>
  );
}