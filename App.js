import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import HomeToDetail from "./src/navigation/hometodetail";
import store from "./store/store";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeToDetail />
      </NavigationContainer>
    </Provider>
  );
}
