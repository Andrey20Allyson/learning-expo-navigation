import { ScreenProps } from "../types";
import BaseScreen from "./BaseScreen";

export default function ModalScreen(props: ScreenProps<'Modal'>) {
  return (
    <BaseScreen {...props}/>
  )
}