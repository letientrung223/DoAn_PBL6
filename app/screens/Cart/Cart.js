import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  CheckBox,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import COLORS from "../../consts/colors";

import { PrimaryButton } from "../../../app/components/Button";
// import cloths from "../../../src/consts/cloths";
const Cart = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  
  const [count, setCount] = useState(1);

    const increase = () => {
    setCount(count => count + 1);
  };

  const decrease = () => {
    setCount(count => count - 1);
  };

  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
        <Image
          source={item.image}
          style={{ height: 100, width: 100, marginTop: 30 }}
        />
        <View
          style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 30 }}>
            {item.name}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            ${item.price}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              paddingTop: 30,
              paddingBottom: 10,
            }}
          >
            Giá từng sp
          </Text>
          <View style={{ flexDirection: "row" }}></View>
          <View style={styles.actionBtn}>
            {/* Nút giảm */}
            <TouchableOpacity
             
             disabled={count <= 1}
             onPress={decrease}
            >
              <FontAwesome name="minus" size={25} color={COLORS.dark} />
            </TouchableOpacity>
            {/* Số lượng */}
            <TextInput style={{ fontSize:16}} >{count}</TextInput>
            {/* Nút tăng */}
            <TouchableOpacity
               // increaseCount;
               onPress={increase}
              
            >
              <FontAwesome name="plus" size={25} color={COLORS.dark} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              console.warn("REMOVE");
            }}
            style={{ padding: 10 }}
          >
            <FontAwesome name="trash-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={styles.header}>
        <FontAwesome
          name="arrow-left"
          size={28}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold" }}> Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={cloths}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Total Price
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Giá ở đây!
              </Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 50,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  cartCard: {
    height: 150,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  actionBtn: {
    width: 100,
    height: 30,
    //backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
});
export default Cart;
