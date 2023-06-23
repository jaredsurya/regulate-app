import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import Navbar from './Navbar';
import Auth from './components/Auth';

export default function Home() {
  const [statusBarToggle, setStatusBarToggle] = useState(true)

  const handleButtonPress = () => {
    // Action to perform when the button is pressed
    console.log('Button pressed!');
  };

  const Stack = createNativeStackNavigator();

  // useFocusEffect(useCallback(() => {
  //   // This will run when screen is `focused` or mounted.
  //   StatusBar.setHidden(true);
  
  //   // This will run when screen is `blured` or unmounted.
  //   return () => {
  //     StatusBar.setHidden(false);
  //   }
  // }, []));

    return (
      <NavigationContainer>
        {isLoading ? (
          <Loading_Screen />
        ) : user ? ( <AppScreens />) : ( <AuthScreens />)}
      </NavigationContainer>
    );
  }

<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
          options={{ headerTitle: (props) => <Navbar {...props} /> }}
        />
        <Stack.Screen name="Auth" component={Auth} options={{ title: 'Overview' }}/>
      </Stack.Navigator>
    </NavigationContainer>


  // <View style={styles.container}>
  //       <Navbar />
  //   <Text>This is the APP component.</Text>
  //   <Text>Blah Blah Blah Blah Blah</Text>
  //   <Button title="Random button!" onPress={handleButtonPress} />
  //   <StatusBar style="light" />
  // </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});