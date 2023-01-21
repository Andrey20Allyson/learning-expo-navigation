import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useColorScheme from './hooks/useColorScheme';

import Navigation from './navigation';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider style={styles.root}>
      <Navigation colorScheme={colorScheme}/>
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000'
  }
});