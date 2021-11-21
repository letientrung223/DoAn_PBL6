import 'react-native-gesture-handler';  
import React from 'react'; 

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import COLORS from './src/consts/colors';
import HomeToDetail from './src/navigation/hometodetail';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
         <HomeToDetail/>  
    </NavigationContainer>
  
  );
}
