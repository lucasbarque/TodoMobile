import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {}

export function Input(props: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
      {...props}
    />
  );
}
