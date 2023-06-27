import React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, Image, TextInput } from "react-native";


{/* <View style={styles.background}>
</View> */}
export default function WelcomeUser() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Regulate</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Meditate'
        style={styles.meditateButton} 
          // onPress={() => navigate to meditate home}
        />
        <Button title='Journal' 
          style={styles.journalButton}
          // onPress={() => navigate to journal home}
        />
      </View>
    </View>
  );
};
//need to place this container style in greybackground, it will
// give this container to all other pages and allow for use of
// the container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 4,
    color: 'hsla(45, 90%, 46%, 1)'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: '80%',
  },
  meditateButton: {
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

