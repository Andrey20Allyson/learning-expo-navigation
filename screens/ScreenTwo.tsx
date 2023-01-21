import { View, Text, TextInput, StyleSheet, requireNativeComponent } from 'react-native';
import { styles as baseStyles } from './BaseScreen';
import NavigationButton from '../components/NavigationButton';

import { ScreenProps } from "../types";

export default function ScreenTwo({
  navigation,
  route: {
    params
  }
}: ScreenProps<'Screen Two'>) {
  const { msg } = params ?? {};



  return (
    <View style={baseStyles.container}>
      <Text style={baseStyles.text}>Screen One {msg}</Text>
      <TextInput style={styles.input} />
      <NavigationButton screenName='Modal' onPress={ev => navigation.navigate('Modal')}/>
      <NavigationButton screenName='Screen One' onPress={ev => navigation.navigate('Screen One')}/>
    </View>
  );
}

export const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff3f',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    borderRadius: 4,
    padding: 2,
    
    outlineStyle: 'none',
    color: '#fff',
  }
});