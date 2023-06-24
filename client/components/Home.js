// functional imports
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, TouchableOpacity, Button, Text, StyleSheet, Image, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

//component imports
import AppScreens from '../app_screens/AppScreens';
import AuthScreens from '../auth_screens/AuthScreens';
import greyBackground from '../styles/greyBackground';

//screen toggle is just for viewing auth or app screens
//need to implement redux store and loading or home screen while user is being loaded

function Home() {
  //set to true for appscreens and false for authscreens
  const [screenToggle, setScreenToggle] = useState(true);

  return (
    <NavigationContainer>
        {/* <View style={styles.container}> */}
      {/* Need to add async for hitting backend, while autlogin is running, display loading screen */}
        {/* <Text style={styles.text}>stuff</Text> */}
        {/* <Button title='Click me'> click this </Button> */}
          {screenToggle ? <AppScreens /> : <AuthScreens />}
        {/* </View> */}
    </NavigationContainer>
  );
};

export default greyBackground(Home);

{/* 
  <Text style={{ fontSize: 24, color: '#FFF' }}>Radial Gradient Background</Text>
</View> */}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'hsla(45, 90%, 46%, 1)'
  },
});