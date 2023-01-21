import { View, Text, StyleSheet } from 'react-native';
import NavigationButton from '../components/NavigationButton';

import { ScreenProps } from "../types";

export default function BaseScreen(props: ScreenProps<'Screen One'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen One</Text>
      <NavigationButton screenName='Screen Two' onPress={ev => props.navigation.navigate('Screen Two', {msg: 'olá'})}/>
    </View>
  );
}

export const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginBottom: 20,
    textShadowColor: '#fbfbff7f',
    color: '#bfbfff',
    textShadowOffset: {height: 1.4, width: 1.4},
    textShadowRadius: 4
  },
  container: {
    flex: 1,
    backgroundColor: '#00000a',
    alignItems: 'center',
    justifyContent: 'center',
  }
});