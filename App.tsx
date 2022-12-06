import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { Header } from "./src/components/Header";
import { Task, Tasks } from "./src/components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addNewTask(task: Omit<Task, "id">) {
    if (tasks[tasks.length - 1] === undefined) {
      setTasks((prev) => [...prev, { ...task, id: 1 }]);
    } else {
      const lastTaskID = tasks[tasks.length - 1].id;
      setTasks((prev) => [...prev, { ...task, id: lastTaskID + 1 }]);
    }
  }

  function removeTask(id: number) {
    const taskToRemove = tasks.find((task) => task.id === id);

    if (taskToRemove) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
  }

  function checkTask(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isFinished: !task.isFinished };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ backgroundColor: "#0D0D0D" }}>
        <Header addNewTask={addNewTask} />
      </SafeAreaView>
      <Tasks tasks={tasks} removeTask={removeTask} checkTask={checkTask} />
    </>
  );
}
