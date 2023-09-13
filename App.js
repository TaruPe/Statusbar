import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar 
        style="auto" // Automatic style
        backgroundColor='red' // statusbar color red
        //hidden={true} // Hidden statusbar (commented out)
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ?  Constants.statusBarHeight : 0, // Top empty space on Android
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
