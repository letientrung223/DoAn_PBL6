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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ScrollView } from "react-native-gesture-handler";
import asset from "../../../assets/asset";
import COLORS from "../../consts/colors";
import orderList from "./../../consts/orderlist";
const { width } = Dimensions.get("screen");
const cardWidth = width - 20;

const Order = ({ navigation }) => {
  const Card = ({ order }) => {
    return (
      <View style={styles.card}>
          <Text style={{ fontSize: 20, fontWeight: "normal", paddingTop: 10 }}>
            ID: {order.id}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "normal", paddingTop: 10 }}>
            DATE: {order.date}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "normal", paddingTop: 10 }}>
            STATUS: {order.status}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "normal", paddingTop: 10 }}>
            TOTAL: {order.total}
          </Text>

        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Text> View Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={{ marginTop: 60 }}>
      <View style={styles.header}>
        <Image
          source={asset.logo}
          style={{ width: 176, height: 42 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.avt}>
        <Image
          source={require("../../../assets/images/person.png")}
          style={{ width: 370, height: 250, borderRadius: 10 }}
        />
      </View>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("User");
          }}
          style={{
            backgroundColor: "#E2E2E2",
            height: 50,
            padding: 10,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="home" size={26} color="black" />
            <Text style={{ fontSize: 24 }}> Dashboard</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: COLORS.grey,
            height: 50,
            padding: 10,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="cart" size={26} color="black" />
            <Text style={{ fontSize: 24 }}> Order</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AccountDetail");
          }}
          style={{
            backgroundColor: "#E2E2E2",
            height: 50,
            padding: 10,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="person" size={26} color="black" />
            <Text style={{ fontSize: 24 }}> Account Detail</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ChangePassword");
          }}
          style={{
            backgroundColor: "#E2E2E2",
            height: 50,
            padding: 10,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="key" size={26} color="black" />
            <Text style={{ fontSize: 24 }}> Change Password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: "#E2E2E2",
            height: 50,
            padding: 10,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="log-out" size={26} color="black" />
            <Text style={{ fontSize: 24 }}> Log Out</Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            paddingTop: 10,
            paddingLeft: 10,
          }}
        >
          Order
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={orderList}
          renderItem={({ item }) => <Card order={item} />}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingLeft: 16,
  },
  avt: {
    paddingTop: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  logo: {
    marginTop: 10,
    width: "70%",
    height: 60,
  },
  item: {
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  textInput: {
    height: 40,

    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  radiocontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
    paddingTop: 10,
    paddingLeft: 10,
  },
  card: {
    height: 200,
    width: cardWidth,
    paddingLeft:10,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    justifyContent:"flex-start",
    backgroundColor: COLORS.grey_light,
  },
});
export default Order;
