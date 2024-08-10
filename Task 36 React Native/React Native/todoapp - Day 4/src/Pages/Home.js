import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Todos from "../Components/Todos";
import { styles } from "../Shared/Styles";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleTodoCompletion,
  loadTodos,
} from "../Redux/todoSlice";
import TodoForm from "../Components/TodoForm";

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    const loadTodosFromStorage = async () => {
      const storedTodos = await AsyncStorage.getItem("todos");
      if (storedTodos) {
        dispatch(loadTodos(JSON.parse(storedTodos)));
      }
    };
    loadTodosFromStorage();
  }, [dispatch]);

  useEffect(() => {
    const saveTodos = async () => {
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    };
    saveTodos();
  }, [todos]);

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  const completedTasks = (id) => {
    dispatch(toggleTodoCompletion(id));
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "flex-start" }}>
        <Text style={{ fontSize: 25 }}>TODO APP</Text>
      </View>
      <TodoForm />
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
