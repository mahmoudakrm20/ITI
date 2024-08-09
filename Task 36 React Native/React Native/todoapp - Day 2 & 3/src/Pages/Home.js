import { StatusBar } from "expo-status-bar";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import { styles } from "../Shared/Styles";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Todos from "../Components/Todos";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const loadTodos = async () => {
      const storedTodos = await AsyncStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    };
    loadTodos();
  }, []);

  const saveTodos = async (newTodos) => {
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (title && description) {
      const newTask = {
        id: (todos.length + 1).toString(),
        title,
        description,
        isCompleted: false,
      };
      const updatedTodos = [...todos, newTask];
      saveTodos(updatedTodos);
      setDescription("");
      setTitle("");
    } else {
      Alert.alert("Error", "Title and Description are required.");
    }
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(updatedTodos);
  };

  const completedTasks = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    saveTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "flex-start" }}>
        <Text style={{ fontSize: 25 }}>TODO APP</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerLine}></View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={{ ...styles.button, ...styles.active }}>
          <Text style={{ color: "white" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, marginRight: 5, marginLeft: 5 }}
        >
          <Text>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollable}>
        <View style={styles.todoContainer}>
          <Todos
            todos={todos}
            onDelete={deleteTask}
            onComplete={completedTasks}
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
