import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import "@expo/metro-runtime";

export default function App() {
  const data = [
    { id: "1", title: "Todo 1", description: "Description 1" },
    { id: "2", title: "Todo 2", description: "Description 2" },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={{ justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 25 }}>TODO APP</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput style={styles.input} placeholder="Title"></TextInput>
          <TextInput style={styles.input} placeholder="Description"></TextInput>
          <TouchableOpacity style={styles.button}>
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
        <FlatList
          style={{ marginTop: 10 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.todoTitle}>{item.title}</Text>
              <Text style={styles.todoDescription}>{item.description}</Text>
            </View>
          )}
        />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
  },
  button: {
    alignItems: "center",
    margin: "auto",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
  },
  active: {
    backgroundColor: "black",
  },
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
    textDecorationLine: "line-through",
  },
  todoTitle: {
    fontSize: 18,
    color: "black",
  },
  todoDescription: {
    color: "gray",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
});
