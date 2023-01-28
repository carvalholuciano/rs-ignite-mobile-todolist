import { useState } from "react";
import { Alert, FlatList, View } from "react-native";
import Clipboard from "../assets/clipboard.svg";
import Logo from "../assets/logo.svg";
import { CreateButton } from "../components/CreateButton";
import { Input } from "../components/Input";
import { Task } from "../components/Task";
import { Text } from "../components/Text";
import { styles } from "./style";

interface Task {
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  function handleTaskAdd() {
    if (!taskTitle.trim()) return;

    if (tasks.filter((task) => task.title === taskTitle).length) {
      return Alert.alert(
        "Tarefa existe",
        "Já existe uma tarefa na lista com esse titulo."
      );
    }

    setTasks((prevState) => [...prevState, { title: taskTitle, done: false }]);
    setTaskTitle("");
  }

  function handleTaskRemove(title: string) {
    Alert.alert("Remover", `Remover a tarefa ${title}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.title !== title)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleToggleTask(title: string) {
    if (tasks.find((task) => task.title === title)?.done) {
      setTasks((prevState) =>
        prevState.map((task) =>
          task.title === title ? { ...task, done: false } : task
        )
      );
    } else {
      setTasks((prevState) =>
        prevState.map((task) =>
          task.title === title ? { ...task, done: true } : task
        )
      );
    }
  }

  return (
    <>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.newTask}>
        <Input
          style={{ marginRight: 4 }}
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <CreateButton onPress={handleTaskAdd} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Task
            key={item.title}
            title={item.title}
            checked={!!tasks.find((task) => task.title === item.title)?.done}
            onToggle={() => handleToggleTask(item.title)}
            onRemove={() => handleTaskRemove(item.title)}
          />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.tasks}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Clipboard />
            <Text style={styles.textEmpty}>
              Você ainda não tem tarefas cadastradas{"\n"}
              <Text>Crie tarefas e organize seus itens a fazer</Text>
            </Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.info}>
            <View style={styles.textInfoContainer}>
              <Text style={styles.textCreated}>Criadas </Text>
              <View style={styles.counter}>
                <Text style={styles.textCounter}>{tasks.length}</Text>
              </View>
            </View>
            <View style={styles.textInfoContainer}>
              <Text style={styles.textDone}>Concluídas </Text>
              <View style={styles.counter}>
                <Text style={styles.textCounter}>
                  {tasks.filter((task) => task.done).length}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </>
  );
}
