import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 20,
    paddingTop: 20,
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
  todoContainer: {},
});
