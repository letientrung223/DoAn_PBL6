import React from "react";
import { View, Text, StyleSheet, Image,TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import COLORS from "../../../src/consts/colors";

const Search = () => {
  return (
    <View style={styles.container}>
        <View
        style={{ marginTop: 30, flexDirection: "row", paddingHorizontal: 20,paddingBottom: 10 }}
      >
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color={COLORS.grey} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search...."
            marginLeft={10}
          />
        </View>
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
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
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.grey_light,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
export default Search;
