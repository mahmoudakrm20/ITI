import "@expo/metro-runtime";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackRoute from "./src/Shared/StackRoute";
import CompletedTasks from "./src/Pages/CompletedTasks";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
export default function App() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Navigator
            screenOptions={{
              headerBackVisible: false,
              tabBarStyle: {
                padding: 5,
              },
            }}
          >
            <Screen
              name="Main"
              component={StackRoute}
              options={{
                headerTitleAlign: "center",
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Feather name="list" size={24} color="black" />
                ),
              }}
            />
            <Screen
              name="Completed Tasks"
              component={CompletedTasks}
              options={{
                headerTitleAlign: "center",
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="checksquare" size={24} color="green" />
                ),
              }}
            />
          </Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
