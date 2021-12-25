import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
// import StripeCheckout from 'react-native-stripe-checkout-webview';
import COLORS from "../../consts/colors";
import { useDispatch, useSelector } from "react-redux";
import asset from "../../../assets/images";
import { FontAwesome } from "@expo/vector-icons";

const CheckOutSession = ({ navigation }) => {
  const tokenVN = useSelector((state) => state.loginReducer.tokenVN);
  const id_payment = useSelector((state) => state.checkoutSessionReducer.id_payment);
  const dispatch = useDispatch();
  const secureKey = 'pk_test_51JvvCDGYQtMrBPcUZfk7aH07awgo9HCoBS1sEURQzXvduZrfQ9zeE4Z5t4nZ0sJOa7U2NavJho5WwPh53kIvJdk10017UCCUUc'
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <FontAwesome
          name="arrow-left"
          size={28}
          color="black"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <Text style={{fontSize: 24,marginLeft:10}}>Payment</Text>
      </View>
      <View style={{padding:20,margin:20,flex: 1 }}>
        <Text>  Token: {tokenVN}</Text>
        <Text> Id Payment: {id_payment}</Text>
        <Text> SecureKey: {secureKey}</Text>

      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: COLORS.white },
  header: {
    paddingVertical: 50,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
});
export default CheckOutSession;
