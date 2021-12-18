import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity,  TextInput, } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import RadioGroup from "react-native-radio-buttons-group";
import { FontAwesome } from "@expo/vector-icons";

import { SecondaryButton } from "../../components/Button";
const radioButtonsData = [
  {
    id: "1",
    label: "S",
    value: "s",
    color:COLORS.white,
    selected: true,
  },
  {
    id: "2",
    label: "M",
    value: "m",
    color: COLORS.white,
    selected: false,
  },
  {
    id: "3",
    label: "L",
    value: "l",
    color: COLORS.white,
    selected: false,
  },
  {
    id: "4",
    label: "XL",
    value: "xl",
    color:COLORS.white,
    selected: false,
  },
];

// const [radioButtons, setRadioButtons] = useState(radioButtonsData);
// const onPressRadioButton = (radioButtonsArray) => {
//   console.log(radioButtonsArray);
//   setRadioButtons(radioButtonsArray);
// };

const DetailScreen = ({ navigation, route }) => {
  const [count, setCount] = useState(1);

    const increase = () => {
    setCount(count => count + 1);
  };

  const decrease = () => {
    setCount(count => count - 1);
  };
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const onPressRadioButton = (radioButtonsArray) => {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };
  const onAddToCard = () => {
    console.warn("Add To Card");
  };
  const item = route.params;
  // console.log(item.images);
  const ListIMG = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}
      >
        {item.images.map((img, index) => (
          <View key={index} style={style.brandBtnImgCon}>
            <Image
             
              source={{ uri: img }}
              style={{
                height: 250,
                width: 250,
                resizeMode: "cover",
              }}
            />
          </View>
        ))}
      </ScrollView>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, marginTop: 30 }}>
      <View style={style.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={28}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <ListIMG />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: COLORS.white }}
            >
              {item.name}
            </Text>
            {/* <View style={style.iconContainer}>
              <MaterialIcons name="favorite-border" color={COLORS.primary} size={25} />
            </View> */}
          </View>
          <Text style={style.detailsText}>{item.description}</Text>
          <View style={style.radiocontainer}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout="row"
            />
          </View>
          <View style={style.actionBtn}>
            {/* Nút giảm */}
            <TouchableOpacity
             
             disabled={count <= 1}
             onPress={decrease}
            >
              <FontAwesome name="minus" size={25} color={COLORS.white} />
            </TouchableOpacity>
            {/* Số lượng */}
            <TextInput style={{ fontSize:20,color: COLORS.white}} >{count}</TextInput>
            {/* Nút tăng */}
            <TouchableOpacity
               // increaseCount;
               onPress={increase}
              
            >
              <FontAwesome name="plus" size={25} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <SecondaryButton title="Add To Cart" onPress={onAddToCard} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 170,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
  categoriesListContainer: {
    paddingVertical: 1,
    alignItems: "center",
    paddingHorizontal: 50,
  },
  brandBtnImgCon: {
    height: 300,
    width: 300,
    // backgroundColor: COLORS.dark,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  radiocontainer: {
    flex: 1,
    marginTop:10,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    color: COLORS.white,
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
    paddingTop: 10,
    paddingLeft: 10,
  },
  actionBtn: {
    width: 100,
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 100
  },
});

export default DetailScreen;
