import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../Shared/Styles";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todoSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const addNewTodo = () => {
    if (title && description) {
      dispatch(addTodo({ title, description }));
      setTitle("");
      setDescription("");
    } else {
      console.error("Title and Description are required.");
    }
  };

  return (
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
      <TouchableOpacity style={styles.button} onPress={addNewTodo}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;
