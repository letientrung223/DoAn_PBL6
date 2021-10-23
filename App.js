import 'react-native-gesture-handler';  //1
import React from 'react'; //2
import Router from './src/navigation/router' //8
import {NavigationContainer} from '@react-navigation/native';//4
import {StatusBar} from 'react-native'; //3
import {createStackNavigator} from '@react-navigation/stack';//5
import COLORS from './src/consts/colors';//6
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
