// functional imports
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

//component imports
import AppScreens from '../app_screens/AppScreens';
import AuthScreens from '../auth_screens/AuthScreens';

//screen toggle is just for viewing auth or app screens
//need to implement redux store and loading or home screen while user is being loaded

export default function Home() {
  //set to true for appscreens and false for authscreens
  const [screenToggle, setScreenToggle] = useState(true);

  return (
    <NavigationContainer>
      <LinearGradient
        colors={['#333333', '#666666', '#333333']}
        start={[0, 0]}
        end={[1, 1]}
        locations={[0.2, 0.6, 0.9]}
        style={{ flex: 1 }}
      >
      {/* Need to add async for hitting backend, while autlogin is running, display loading screen */}
        <View style={styles.background}>
          {screenToggle ?
            <AppScreens /> 
          : 
            <AuthScreens />
          }
        </View>
      </LinearGradient>
    </NavigationContainer>
  );
};

{/* 
  <Text style={{ fontSize: 24, color: '#FFF' }}>Radial Gradient Background</Text>
</View> */}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  }
});