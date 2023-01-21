import { useState } from "react";
import { GestureResponderEvent, Pressable, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { RootParamList } from "../types";

export interface NavigationButtonProps {
  screenName: keyof RootParamList;
  onPress?: (ev: GestureResponderEvent) => void
}

export default function NavigationButton({
  screenName,
  onPress
}: NavigationButtonProps) {
  let [pressed, setPressed] = useState(false);

  const stylesArray: StyleProp<ViewStyle> = [styles.body];

  const touchStart = (ev: GestureResponderEvent) => {
    setPressed(true);
  }

  function touchEnd(ev: GestureResponderEvent) {
    setPressed(false);
  }

  if (pressed) stylesArray.push(styles.bodyPressed);

  return (
    <Pressable 
      style={stylesArray}
      onPressIn={touchStart}
      onPressOut={touchEnd}
      onPress={onPress}
      android_ripple={{color: '#ffffff5f'}}>
      <Text style={styles.text}>Go to {screenName}</Text>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#44f',
    padding: 4,
    borderRadius: 3,
    borderWidth: 2,
    borderBottomColor: '#22f',
    borderRightColor: '#22f',
    borderTopColor: '#44f',
    borderLeftColor: '#44f',
    borderStyle: 'solid',
    margin: 5
  },
  bodyPressed: {
    borderBottomColor: '#44f',
    borderRightColor: '#44f',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    marginTop: 7,
    marginLeft: 7,
    borderWidth: 2
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
});