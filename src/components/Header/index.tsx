import { useState } from "react";
import { Alert, Image, View } from "react-native";
import { styles } from "./styles";

import logoImg from "../../../assets/logo.png";

import { Input } from "../Input";
import { Button } from "../Button";
import { Task } from "../Tasks";

interface HeaderProps {
  addNewTask: (task: Omit<Task, "id">) => void;
}

export function Header({ addNewTask }: HeaderProps) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleAddTask() {
    if (taskTitle !== "") {
      addNewTask({
        title: taskTitle,
        isFinished: false,
      });
      setTaskTitle("");
    } else {
      Alert.alert("Por favor, preencha o título da tarefa");
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      <View style={styles.form}>
        <Input value={taskTitle} onChangeText={(text) => setTaskTitle(text)} />
        <Button onPress={handleAddTask} />
      </View>
    </View>
  );
}
