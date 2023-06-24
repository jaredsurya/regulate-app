import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from "react-native";


export default function WelcomeUser() {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>WelcomeUser</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 15,
    // backgroundColor: 'hsla(330, 1%, 43%, 1)'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'hsla(45, 90%, 46%, 1)'
  },
});

