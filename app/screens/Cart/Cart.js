import React, { useState, useEffect } from "react";
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
import { fetchUserCart, deleteItem } from "../../redux/cart/action";
import COLORS from "../../consts/colors";
import { useDispatch, useSelector } from "react-redux";

import { PrimaryButton } from "../../../app/components/Button";

const Cart = ({ navigation }) => {
  const tokenVN = useSelector((state) => state.loginReducer.tokenVN);

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserCart();
  }, [dispatch]);

  const getUserCart = () => {
    dispatch(fetchUserCart(tokenVN));
  };

  const increase = () => {
    setCount((count) => count + 1);
    // dispatch tang sl
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };
  const userCart = useSelector((state) => state.cartReducer.cart);
  const onRemove = (id) => {
    dispatch(deleteItem(id));
  };

  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        {/* ================================================================ */}
        <View>
          <TouchableOpacity
            onPress={() => onRemove(item._id)}
            style={{ paddingTop: 60, paddingRight: 10 }}
          >
            <FontAwesome name="trash-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* ================================================================ */}
        <View>
          <Image
            source={{ uri: item.product.imageCover }}
            style={{ height: 100, width: 100, marginTop: 10 }}
          />
          <View style={styles.actionBtn}>
            {/* Decrease */}
            <TouchableOpacity disabled={count <= 1} onPress={decrease}>
              <FontAwesome name="minus" size={20} color={COLORS.dark} />
            </TouchableOpacity>
            {/* Quantity */}
            <TextInput style={{ fontSize: 16 }} placeholder="">
              {item.userQuantity}{" "}
            </TextInput>
            {/* Increase */}
            <TouchableOpacity onPress={increase}>
              <FontAwesome name="plus" size={20} color={COLORS.dark} />
            </TouchableOpacity>
          </View>
        </View>
        {/* ================================================================ */}

        <View
          style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
        >
          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginTop: -10 }}
            numberOfLines={1}
          >
            {item.product.name}
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "red",
              paddingTop: 10,
            }}
          >
            Price: ${item.product.price}
          </Text>
          {/* </View>  */}
          {/* <View style={{ marginRight: 20, alignItems: "center" }}> */}
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            Quantity:{item.userQuantity}
          </Text>
          <Text
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 18,
              // paddingTop: 10,
              // paddingBottom: 10,
            }}
          >
            Size:{item.userSize}
          </Text>
        </View>
        {/* ================================================================ */}
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
        <Text style={{ fontSize: 24, fontWeight: "bold",paddingLeft:115 }}> Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={userCart}
        renderItem={({ item }) => <CartCard item={item}
        keyExtractor={(item) => item._id} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View style={{ marginHorizontal: 30 }}>
              <PrimaryButton title="CREATE ORDER" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
    // <SafeAreaView>
    //   <View style={styles.header}>
    //     <FontAwesome
    //       name="arrow-left"
    //       size={28}
    //       color="black"
    //       onPress={() => navigation.navigate("Home")}
    //     />
    //     <Text style={{ fontSize: 24, fontWeight: "bold", paddingLeft: 120 }}>
    //       Cart
    //     </Text>
    //   </View>
    //   <View style={{ alignItems: "center", paddingTop: 30 }}>
    //     <Text style={styles.text}>Chào mừng đến với L'ous Shop!! </Text>
    //     <Text style={styles.text}>Đăng nhập ngay! </Text>
    //     <View style={styles.root}>
    //       <CustomButton
    //         text="Sign in"
    //         onPress={() => navigation.navigate("SignInScreen")}
    //       />
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 10,
    paddingTop: 20,
    width: "90%",
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
    paddingHorizontal: 10,
    color: COLORS.green,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  cartCard: {
    height: 160,
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
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
});
export default Cart;
