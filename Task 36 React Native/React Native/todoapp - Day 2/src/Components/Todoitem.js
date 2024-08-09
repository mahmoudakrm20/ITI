import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
const Todoitem = ({ todo, onDelete, onComplete }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Todo Details", { todo })}
      activeOpacity={0.5}
      style={{
        marginVertical: 4,
        width: "100%",
        marginVertical: 4,
        width: "100%",
        borderWidth: 1,
        borderBlockColor: "grey",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text>{todo.title}</Text>
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        <TouchableOpacity onPress={() => onComplete(todo.id)}>
          {todo.isCompleted ? (
            <AntDesign name="checkcircle" size={22} color="green" />
          ) : (
            <AntDesign name="checkcircleo" size={22} color="green" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(todo.id)}>
          <Feather name="trash" size={22} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Todoitem;
