import 'react-native-gesture-handler';  
import React from 'react'; 
import Router from './src/navigation/router' 
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import COLORS from './src/consts/colors';
import DetailScreen from './src/screens/DetailScreen/DetailScreen';7

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator screenOptions ={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={Router}/>
            <Stack.Screen name="DetailScreen" component={DetailScreen}/>
          </Stack.Navigator>
    </NavigationContainer>
  
  );
}
