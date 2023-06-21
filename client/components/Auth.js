import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react'

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Perform sign-in logic using the email and password
    console.log('Sign in:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to REGULATE.</Text>
      <Text>Please sign in below.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <StatusBar style="auto" />
    </View>
  );
}


//should we make a dedicated css stylesheet?
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
