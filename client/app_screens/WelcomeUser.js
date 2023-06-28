import React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, Image, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import GreyBackground from '../styles/GreyBackground';


const MeditateButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} >
    <LinearGradient
      colors={['hsla(29, 100%, 87%, 1)', 'hsla(29, 100%, 47%, 1)', 'hsla(29, 100%, 47%, 1)']}
      style={buttons.container}
    >
      <Text style={buttons.buttonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const JournalButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} >
    <LinearGradient
      colors={['hsla(245, 100%, 81%, 1)', 'hsla(245, 100%, 51%, 1)', 'hsla(245, 100%, 51%, 1)']}
      style={buttons.container}
    >
      <Text style={buttons.buttonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
)

const buttons = StyleSheet.create({
  container: {
    elevation: 8,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 3,
    borderColor: 'hsla(0, 0%, 18%, 1)'
  },
  buttonText: {
    fontSize: 18,
    color: "#hsla(360, 100%, 100%, 0.75)",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: 'RacingSansOne_400Regular',
    letterSpacing: 3,
  }
})

export default function WelcomeUser() {
  return (
    <GreyBackground>
      <View style={styles.container}>

        <View style={styles.textContainer}>
          <Text style={styles.text}>Regulate</Text>
        </View>

        <View style={styles.buttonContainer}>
          <MeditateButton title="Meditate" />
          <JournalButton title="Journal" />
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
    justifyContent: 'space-around',
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