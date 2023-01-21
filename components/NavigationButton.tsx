import { useState } from "react";
import { GestureResponderEvent, Pressable, Text, StyleSheet } from "react-native";

export default function NavigationButton(props: { screenName: string, onPress?: (ev: GestureResponderEvent) => void }) {
  let [pressed, setPressed] = useState(false);

  function touchStart(ev: GestureResponderEvent) {
    setPressed(true);
  }

  function touchEnd(ev: GestureResponderEvent) {
    setPressed(false);
  }

  return (
    <Pressable 
      style={{...styles.body, ...(pressed? styles.bodyPressed: {})}}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      onPress={props.onPress}>
      <Text style={styles.text}>Go to {props.screenName}</Text>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#44f',
    padding: 4,
    borderRadius: 3,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#22b',
    borderStyle: 'solid',
    right: 2,
    bottom: 2
  },
  bodyPressed: {
    
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
});