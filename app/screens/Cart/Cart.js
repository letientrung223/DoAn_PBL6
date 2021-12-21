import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  
} from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { fetchUserCart, deleteItem,increaseQuantityUserCart, decreaseQuantityUserCart} from "../../redux/cart/action";
import COLORS from "../../consts/colors";
import { useDispatch, useSelector } from "react-redux";

import { PrimaryButton } from "../../../app/components/Button";

const Cart = ({ navigation }) => {
  const tokenVN = useSelector((state) => state.loginReducer.tokenVN);
  const userCart = useSelector((state) => state.cartReducer.cart);
  function getIdCartItem(inputs) {
    
    var output = inputs.map(function(item){
        return item._id})
    return output
}
  const ID_cartItem = getIdCartItem(userCart);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserCart();
  }, [dispatch]);

  const getUserCart = () => {
    dispatch(fetchUserCart(tokenVN));
  };

  const increase =async (id_product,size,quantity) => {

    dispatch(increaseQuantityUserCart(id_product,size,quantity,tokenVN))
  };
  const decrease =async (id_product,size,quantity) => {
    dispatch(decreaseQuantityUserCart(id_product,size,quantity,tokenVN))
  };

  const onRemove = async (id) => {
  
     dispatch(deleteItem(id,tokenVN));
   
  };
  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        {/* ================================================================ */}
        <View>
          <TouchableOpacity
            onPress={() => {onRemove(item._id)}}
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
            <TouchableOpacity 
            disabled={item.userQuantity <= 1} 
            onPress={()=> decrease(item._id,item.userSize,item.userQuantity)}>
              <FontAwesome name="minus" size={20} color={COLORS.dark} />
            </TouchableOpacity>
            {/* Quantity */}
            <Text style={{ fontSize: 16 }} placeholder="">
              {item.userQuantity}{" "}
            </Text>
            {/* Increase */}
            <TouchableOpacity 
            onPress={()=> increase(item._id,item.userSize,item.userQuantity)}>
              <FontAwesome name="plus" size={20} color={COLORS.dark} />
            </TouchableOpacity>
          </View>
        </View>
        {/* ================================================================ */}

        <View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: -10 }}numberOfLines={1}>{item.product.name}</Text>

          <Text style={{fontSize: 16,fontWeight: "bold",color: "red",paddingTop: 10,}}>Price: ${item.product.price}</Text>
          
          <Text style={{fontWeight: "bold",fontSize: 16,paddingTop: 10, paddingBottom: 10,}}>Quantity:{item.userQuantity}</Text>
          
          <Text style={{ textTransform: "uppercase",fontWeight: "bold",fontSize: 18,}}>Size:{item.userSize}</Text>

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
        
        />}
        keyExtractor={ ( item, index ) => `${index}` }

        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View style={{ marginHorizontal: 30 }}>
              <PrimaryButton title="Check Out" onPress={() => navigation.navigate("CheckOut",ID_cartItem)}/>
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
