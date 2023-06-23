import React from 'react';
import styles from '../../styles/Welcome.js';

export default function Welcome() {
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
};

