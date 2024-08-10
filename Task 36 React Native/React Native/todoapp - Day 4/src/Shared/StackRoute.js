import React from "react";
import TodoDetails from "../Pages/TodoDetails";
import Home from "../Pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackRoute = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{ headerTitleAlign: "center" }}
      />
      <Screen
        name="Todo Details"
        component={TodoDetails}
        options={{ headerTitleAlign: "center" }}
      />
    </Navigator>
  );
};

export default StackRoute;
