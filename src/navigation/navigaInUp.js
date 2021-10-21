import 'react-native-gesture-handler';
import React from 'react';
import SignUpScreen from '../screens/SignUpScreen';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from "../screens/SignInScreen";
const Stack = createStackNavigator();

const navigateInUp = () => {
  return (
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
  );
};
export default navigateInUp;