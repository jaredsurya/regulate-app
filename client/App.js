import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Regulate app! with wire frames ARRRRRRRR!!! overboardnoreunerovner</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// 1. Route interal pages somehow, learn this
// 2. figure out how to hit rails backend
// 3. ERM for backend, users, journal, meditation
// 4. Create login or home page for styling practice
// 5. complete some wireframing
// 6. verify that Expo is working

// Jared - 
// Styling, addition of libraries or CSS

// Igor -
// Route backend and hit API's
// Maybe figure out internal routing, maybe react-router? or native equivalent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
