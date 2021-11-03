import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';

import Cart from "../screens/Cart";
import Menu from "../screens/Menu";
import Search from "../screens/Search";
import Home from "../screens/Home";

import User from "../screens/User";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import AccountDetail from "../screens/AccountDetail";
import ChangePassword from "../screens/ChangePassword";
import OrderScreen from "../screens/OrderScreen";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
function SignInSignUp(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="SignInScreen" component={SignInScreen}/>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </Stack.Navigator>
  );
}
function Moving(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="User" component={User}/>
      <Stack.Screen name="OrderScreen" component={OrderScreen}/>
      <Stack.Screen name="AccountDetail" component={AccountDetail}/>
      <Stack.Screen name="ChangePassword" component={ChangePassword}/>

    </Stack.Navigator>
  );
}
export default function Router() {
  return (
    <Tab.Navigator
      
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        
      }}
      tabBarOption={{
        style: {
          backgroundColor: '#EE8822',
          borderTopColor: "transparent",
          elevation: 0,
        },
        labelShown: false, // khong the ẩn tên tabbar nhi??
        
        activeTinColor: "#C02E2E",
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="bars" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="cart-plus" size={size} color={color} />
          ),
        }}
      />
      {/* !isLogin ? SignInSignUp ? DashBoard */}
      <Tab.Screen
        name="Profile"
        component={Moving}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
