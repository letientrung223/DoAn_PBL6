import "react-native-gesture-handler";
import React from "react";
import Router from "./router";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import DetailScreen from "../screens/DetailScreen";
import Menu from "../screens/Menu";
import { Easing } from "react-native";
const Stack = createStackNavigator();
const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    transitionSpec: {
      open: config,
      close: config,
    },
  },
};
const closeConfig = {
  animation: "timing",
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};
export default function HomeToDetail() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS
        // transitionSpec:{
        //   open: config,
        //   close: closeConfig,
        // },
        // cardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS,
      }}
      // headerMode="float"
      animation="fade"
    >
      <Stack.Screen name="HomeScreen" component={Router} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}
