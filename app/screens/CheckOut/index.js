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
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../../consts/colors";
import CustomInput from "../../components/CustomInput";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { postCheckOutOrder } from "../../redux/checkout/action";

const CheckOut = ({ navigation, route }) => {
  const tokenVN = useSelector((state) => state.loginReducer.tokenVN);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const dispatch = useDispatch();
  const ID_cartItem = route.params;
  const userCart = useSelector((state) => state.cartReducer.cart);
  const shippingAddress = {
    address: address,
    city: city,
    firstName: firstName,
    lastName: lastname,
    phoneNumber: phonenumber,
  };
  const onPressCreateOrder = (Id, Address, tokenVN) => {
    console.log(Id, Address, tokenVN);
    dispatch(postCheckOutOrder(Id, Address, tokenVN));
  };
  const CartCard = ({ item }) => {
    // console.log(item);
    return (
      <View style={styles.cartCard}>
        {/* ================================================================ */}
        <View>
          <Image
            source={{ uri: item.product.imageCover }}
            style={{ height: 100, width: 100, marginTop: 10 }}
          />
        </View>
        {/* ================================================================ */}

        <View
          style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
        >
          <Text style={{ fontSize: 16, paddingTop: -10 }} numberOfLines={1}>
            {item.product.name}
          </Text>
          <Text style={{ fontSize: 16, paddingTop: 10 }}>
            Price: ${item.product.price}    Size: {item.userSize}
          </Text>
          {/* <Text style={{ fontSize: 16, textTransform: "uppercase" }}>
            Size:{item.userSize}
          </Text> */}
          
          <Text style={{ fontSize: 16, paddingTop: 10, paddingBottom: 10 }}>
            Quantity:{item.userQuantity}     Total :$ {item.userQuantity * item.product.price}
          </Text>
          {/* <Text style={{ fontSize: 16, paddingTop: 10, paddingBottom: 10 }}>
            Total :$ {item.userQuantity * item.product.price}
          </Text> */}
        </View>
        {/* ================================================================ */}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <View style={styles.header}>
        <FontAwesome
          name="arrow-left"
          size={28}
          color="black"
          onPress={() => navigation.navigate("Cart")}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", paddingLeft: 90 }}>
          {" "}
          Check Out
        </Text>
      </View>
    <ScrollView>
      

      {/* List */}
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        data={userCart}
        renderItem={({ item }) => (
          <CartCard item={item} keyExtractor={(item) => item._id} />
        )}
      />
      {/* ===== */}
      <View style={styles.root}>
        <CustomInput
          placeholder="Address"
          value={address}
          setValue={setAddress}
        />
        <CustomInput placeholder="City" value={city} setValue={setCity} />
        <CustomInput
          placeholder="First Name"
          value={firstName}
          setValue={setFirstName}
        />
        <CustomInput
          placeholder="Last Name"
          value={lastname}
          setValue={setLastName}
        />
        <CustomInput
          placeholder="Phone Number"
          value={phonenumber}
          setValue={setPhonenumber}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            onPressCreateOrder(ID_cartItem, shippingAddress, tokenVN)
          }
        >
          <View
            style={{ ...styles.btnContainer, backgroundColor: COLORS.green }}
          >
            <Text style={{ ...styles.title, color: COLORS.white }}>
              Place Order
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("CheckOutSession")
          }
        >
          <View
            style={{ ...styles.btnContainer, backgroundColor: COLORS.green }}
          >
            <Text style={{ ...styles.title, color: COLORS.white }}>
              Payment
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
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
  title: { color: COLORS.white, fontWeight: "bold", fontSize: 18 },
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    width: 260,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 20,
    marginTop: 20,
  },
});
export default CheckOut;
