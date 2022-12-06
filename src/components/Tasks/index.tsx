import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

import clipboardIMG from "../../../assets/clipboard.png";
import { Task } from "../Task";

export interface Task {
  id: number;
  title: string;
  isFinished: boolean;
}

interface TasksProps {
  tasks: Task[];
  removeTask: (id: number) => void;
  checkTask: (id: number) => void;
}

export function Tasks({ tasks, removeTask, checkTask }: TasksProps) {
  const tasksFinishedCount = tasks.reduce((acc, currentValue) => {
    if (currentValue.isFinished) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.created}>
          <Text style={styles.createdText}>Criadas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.finished}>
          <Text style={styles.finishedText}>Concluídas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{tasksFinishedCount}</Text>
          </View>
        </View>
      </View>

      {tasks.length === 0 ? (
        <View style={styles.emptyList}>
          <Image source={clipboardIMG} />
          <Text style={styles.textEmptyTitle}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.textEmptyText}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      ) : (
        <ScrollView>
          {tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              id={task.id}
              isFinished={task.isFinished}
              removeTask={removeTask}
              checkTask={checkTask}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}
