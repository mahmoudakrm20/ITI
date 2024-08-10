import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AntDesign from "@expo/vector-icons/AntDesign";
import { loadTodos, toggleTodoCompletion } from "../Redux/todoSlice";

const image = { uri: "../../assets/background.jpg" };

const CompletedTasks = () => {
  const dispatch = useDispatch();
  const completedTodos = useSelector((state) =>
    state.todo.todos.filter((todo) => todo.isCompleted)
  );

  const loadCompletedTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem("todos");
      if (storedTodos) {
        const todos = JSON.parse(storedTodos);
        dispatch(loadTodos(todos));
      }
    } catch (error) {
      console.error("Failed to load todos:", error);
    }
  };

  useEffect(() => {
    loadCompletedTodos();
  }, [dispatch]);

  const handleToggleCompletion = (id) => {
    dispatch(toggleTodoCompletion(id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleToggleCompletion(item.id)}
      >
        <AntDesign name="checkcircle" size={20} color="#4CAF50" />
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Completed Tasks</Text>
        <FlatList
          data={completedTodos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  itemContainer: {
    marginVertical: 8,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  itemDescription: {
    fontSize: 14,
    color: "#555",
  },
  iconContainer: {
    marginLeft: 10,
  },
  image: {
    flex: 1,
  },
});

export default CompletedTasks;
