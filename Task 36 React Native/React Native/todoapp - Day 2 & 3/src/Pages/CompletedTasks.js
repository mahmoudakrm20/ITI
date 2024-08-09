import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const image = { uri: "../../assets/background.jpg" };
const CompletedTasks = () => {
  const [completedTodos, setCompletedTodos] = useState([]);

  const loadCompletedTodos = async () => {
    const storedTodos = await AsyncStorage.getItem("todos");
    if (storedTodos) {
      const todos = JSON.parse(storedTodos);
      const completed = todos.filter((todo) => todo.isCompleted);
      setCompletedTodos(completed);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await loadCompletedTodos();
      console.log(
        "i know that's not a great way but home isn't a parent so i can't use props to pass the state :D"
      );
    }, 1000);

    loadCompletedTodos();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Completed Tasks</Text>
        <FlatList
          data={completedTodos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  itemContainer: {
    marginVertical: 2,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
  },
  itemTitle: { fontSize: 18, fontWeight: "600" },
  itemDescription: { fontSize: 14, color: "#555" },
  image: {
    flex: 1,
  },
});

export default CompletedTasks;
