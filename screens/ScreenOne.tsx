import { View, Text } from 'react-native';
import { styles } from './BaseScreen';
import NavigationButton from '../components/NavigationButton';

import { ScreenProps } from "../types";

export default function ScreenOne(props: ScreenProps<'Screen One'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen One</Text>
      <NavigationButton screenName='Screen Two' onPress={ev => props.navigation.navigate('Screen Two', {msg: 'olá'})}/>
    </View>
  );
}