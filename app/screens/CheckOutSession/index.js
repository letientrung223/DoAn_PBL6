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

const CheckOutSession = ({ navigation }) => {
  const tokenVN = useSelector((state) => state.loginReducer.tokenVN);
  const id_payment = useSelector((state) => state.checkoutSessionReducer.id_payment);
  const dispatch = useDispatch();
  const secureKy = 'pk_test_51JvvCDGYQtMrBPcUZfk7aH07awgo9HCoBS1sEURQzXvduZrfQ9zeE4Z5t4nZ0sJOa7U2NavJho5WwPh53kIvJdk10017UCCUUc'
  return (
    <SafeAreaView style={styles.root}>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: COLORS.white },
});
export default CheckOutSession;
