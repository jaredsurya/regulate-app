import React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, Image, TextInput } from "react-native";
// import { LinearGradient } from 'expo-linear-gradient';
import GreyBackground from '../styles/GreyBackground';
{/* <View style={styles.background}>
</View> */}
export default function WelcomeUser() {
  return (
    <GreyBackground>
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
            color: 'hsla(241, 64%, 49%, 1)'
            style={styles.journalButton}
          // onPress={() => navigate to journal home}
          />
        </View>
      </View>

    </GreyBackground>

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
    // flexDirection: 'column'
  },
  textContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    fontSize: 69, //hehe
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 6,
    color: 'hsla(45, 90%, 46%, 1)',
    fontFamily: 'RacingSansOne_400Regular'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  meditateButton: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'hsla(28, 100%, 60%, 1)',
  },
  journalButton: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'hsla(241, 64%, 49%, 1)'
  }
});

