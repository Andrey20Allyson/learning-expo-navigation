import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { RootParamList } from '../types';
import { ColorSchemeName } from 'react-native';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';

export default function Navigation(props: { colorScheme: NonNullable<ColorSchemeName> }) {
  return (
    <NavigationContainer
    theme={props.colorScheme === 'dark'? DarkTheme: DefaultTheme}>
      <Navigator/>
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootParamList>();

export function Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#222'}, headerTintColor: '#fff'}}>
      <Stack.Screen name='Screen One' component={ScreenOne}/>
      <Stack.Screen name='Screen Two' component={ScreenTwo}/>
    </Stack.Navigator>
  )
}