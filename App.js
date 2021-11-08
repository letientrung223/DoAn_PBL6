import 'react-native-gesture-handler';  
import React from 'react'; 

import {NavigationContainer} from '@react-navigation/native';
// import COLORS from './src/consts/colors';
import HomeToDetail from './src/navigation/HTD';


export default function App() {
  return (
    <NavigationContainer>
         <HomeToDetail/>
    </NavigationContainer>
  
  );
}
