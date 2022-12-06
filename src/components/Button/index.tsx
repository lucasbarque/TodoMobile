import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

import plusImg from "../../../assets/plus.png";

interface ButtonProps extends TouchableOpacityProps {}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Image source={plusImg} />
    </TouchableOpacity>
  );
}
