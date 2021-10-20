import React from "react";
import { View, Text, StyleSheet, Image, } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import asset from "../../../assets/asset";
const Home = () => {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source = {asset.scarves} />
      
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
    width: 30,
    height: 60,
  },
});
export default Home;
