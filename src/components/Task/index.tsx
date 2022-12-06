import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import trashIMG from "../../../assets/trash.png";
import checkedIMG from "../../../assets/checked.png";
import uncheckedIMG from "../../../assets/unchecked.png";
import { Task as TaskPropst } from "../Tasks";

interface TaskProps extends TaskPropst {
  removeTask: (id: number) => void;
  checkTask: (id: number) => void;
}

export function Task({
  title,
  id,
  isFinished,
  removeTask,
  checkTask,
}: TaskProps) {
  return (
    <View style={styles.container}>
      {isFinished ? (
        <TouchableOpacity onPress={() => checkTask(id)}>
          <Image source={checkedIMG} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => checkTask(id)}>
          <Image source={uncheckedIMG} />
        </TouchableOpacity>
      )}
      <Text style={isFinished ? styles.textStriped : styles.text}>{title}</Text>
      <TouchableOpacity onPress={() => removeTask(id)}>
        <Image source={trashIMG} />
      </TouchableOpacity>
    </View>
  );
}
