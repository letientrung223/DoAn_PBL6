import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import asset from "../../../assets/asset";
import CustomButton from "../../components/CustomButton";

const ListSelect = [
  { id: "Dashboard", title: "Dashboard", icons: "home" },
  { id: "Order", title: "Order", icons: "cart-plus" },
  { id: "Account Detail", title: "Account Detail", icons: "user" },
  { id: "Change Profile", title: "Change Profile", icons: "key" },
  { id: "Log out", title: "Log out", icons: "sign-out" },
];
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View>
      <FontAwesome name={item.icons} size={25} />
    </View>
    <View>
      <Text style={[styles.text, textColor]}> {item.title}</Text>
    </View>
  </TouchableOpacity>
);
const User = () => {
  const onSubscribePressed = () => {
    Alert("Da dang ki");
  };
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#9C9999" : "#E2E2E2";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <ScrollView>
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
          //resizeMode="contain"
        />
      </View>
      <SafeAreaView>
        <FlatList
          data={ListSelect}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            paddingTop: 10,
            paddingLeft: 10,
          }}
        >
          Dashboard
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "normal",
            textStyle: "#E2E2E2",
            paddingTop: 30,
            paddingLeft: 10,
            paddingRight:10,
            paddingBottom:20,
          }}
        >
          From your account dashboard you can view your recent orders, manage
          your account detail and change your password
        </Text>
        <View
          style={styles.box}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Get Expert Tips In Your Inbox
          </Text>
          <Text>Subscribe to our newsletter and stay updated</Text>
          <TextInput
            style={styles.textip}
            placeholder={"Write your email here"}
          />
          <CustomButton
            text="Subscribe"
            bgColor="#000000"
            fgColor="#FFFFFF"
            onPress={onSubscribePressed}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingTop: 72,
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
  textip:{
    height: 40,
    width: "100%",
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"#FFFFFF",
  },
  box:{
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center",
  }

});
export default User;
