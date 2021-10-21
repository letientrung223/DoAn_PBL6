import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cart</Text>
      <FontAwesome name="cart-plus" size={50} color={'#ED6D10'}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:'#ff0000'
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    marginTop: 10,
    width: "70%",
    height: 60,
  },
});
export default Cart;
