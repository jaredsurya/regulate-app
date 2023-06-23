import React from 'react';
import RadialGradient from 'react-native-radial-gradient';
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from "react-native";


export default function Welcome() {
  return (
    <Text>Welcome to login</Text>
//     <View style={styles.container}>
//     {/* <RadialGradient style={{width:200,height:200}}
//                         colors={['black','green','blue','red']}
//                         stops={[0.1,0.4,0.3,0.75]}
//                         center={[100,100]}
//                         radius={200}> */}
//       <Text>REGULATE</Text>
//       <Text>Please sign in below.</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={text => setEmail(text)}
//         value={email}
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         onChangeText={text => setPassword(text)}
//         value={password}
//         secureTextEntry
//       />
//       <Button title="Sign In" onPress={handleSignIn} />
//       <StatusBar style="auto" />
//  {/* </RadialGradient> */}
//     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container1: {
    width: "100%",
    paddingTop: "5%",
    paddingHorizontal: "10%",
  },
  image: {
    width: "90%",
    height: "40%",
  },
});

