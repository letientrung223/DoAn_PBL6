import 'react-native-gesture-handler';  
import React from 'react'; 
import Router from './router'; 
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from "../screens/DetailScreen"
const Stack = createStackNavigator();

export default function HTD() {
  return (
          <Stack.Navigator screenOptions ={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={Router}/>
            <Stack.Screen name="DetailScreen" component={DetailScreen}/>
          </Stack.Navigator>
  );
}
