import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const Todoitem = ({ todo, onDelete, onComplete }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    onDelete(todo.id);
    setModalVisible(false);
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Todo Details", { todo })}
      activeOpacity={0.8}
      style={styles.todoContainer}
    >
      <Text style={styles.todoTitle}>{todo.title}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => onComplete(todo.id)}>
          {todo.isCompleted ? (
            <AntDesign name="checkcircle" size={20} color="#4CAF50" />
          ) : (
            <AntDesign name="checkcircleo" size={20} color="#9E9E9E" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.iconButton}
        >
          <Feather name="trash" size={20} color="#F44336" />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this item?
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                onPress={handleDelete}
                style={[styles.modalButton, styles.modalButtonConfirm]}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={[styles.modalButton, styles.modalButtonCancel]}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginVertical: 8,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    elevation: 2, // Adds shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  todoTitle: {
    fontSize: 16,
    color: "#333",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 10, // Space between icons
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 280,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, // Adds shadow for Android
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: "#333",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
  },
  modalButtonConfirm: {
    backgroundColor: "#4CAF50",
  },
  modalButtonCancel: {
    backgroundColor: "#F44336",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Todoitem;
