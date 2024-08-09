import { View, Text } from "react-native";
import React from "react";
import Todoitem from "./Todoitem";

const Todos = ({ todos, onDelete, onComplete }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todoitem
          todo={todo}
          key={todo.id}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </>
  );
};

export default Todos;
