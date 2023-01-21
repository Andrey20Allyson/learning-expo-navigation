import { View, Text } from 'react-native';
import { styles } from './BaseScreen';
import NavigationButton from '../components/NavigationButton';

import { ScreenProps } from "../types";

export default function ScreenTwo(props: ScreenProps<'Screen Two'>) {
  const { msg } = props.route.params ?? {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen One {msg}</Text>
      <NavigationButton screenName='Screen One' onPress={ev => props.navigation.navigate('Screen One')}/>
    </View>
  );
}