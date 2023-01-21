import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ScreenTwoParam = {
  msg: string;
}

export type RootParamList = {
  'Screen One': undefined;
  'Screen Two': ScreenTwoParam | undefined;
  'Modal': undefined;
}

export type ScreenProps<Name extends keyof RootParamList> = NativeStackScreenProps<RootParamList, Name>;