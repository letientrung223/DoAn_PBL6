import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import { FontAwesome } from "@expo/vector-icons";
import { SecondaryButton } from "../../components/Button";
import RadioForm from 'react-native-simple-radio-button';
import {AddItemToCart} from "../../redux/product/action"
import { useDispatch, useSelector } from "react-redux";

var radio_props = [
  {label: 'S   ', value: 's' },
  {label: 'M   ', value: 'm' },
  {label: 'L   ', value: 'l' },
  {label: 'XL  ', value: 'xl' },

];

const DetailScreen = ({ navigation, route }) => {
  const [count, setCount] = useState(1);
  const [value, setValues] = useState("");
  const dispatch =useDispatch();

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };

 
  const onAddToCard = (id_product,size,qty,tokenVN) => {
    dispatch(AddItemToCart(id_product,qty,size,tokenVN))
  };
  const tokenVN = useSelector((state) => state.loginReducer.tokenVN); 
  const item = route.params;
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
          </View>
          <Text style={style.detailsText}>{item.description}</Text>
          <View style={style.radiocontainer}>
            <RadioForm
              radio_props={radio_props}
              initial={value}
              buttonColor={'#FFFFFF'}
              labelColor={'#FFFFFF'}
              formHorizontal={true}
              style={{paddingLeft:10,paddingRight:20,marginLeft:10,marginRight:10}}
              onPress={(vl) => {setValues(vl)}}
        />
          </View>

          <View style={style.actionBtn}>

            <TouchableOpacity disabled={count <= 1} onPress={decrease}>
              <FontAwesome name="minus" size={25} color={COLORS.white} />
            </TouchableOpacity>

            <Text style={{ fontSize: 20,color: COLORS.white,paddingHorizontal: 30}}>{count}</Text>
            
            <TouchableOpacity onPress={increase}>
              <FontAwesome name="plus" size={25} color={COLORS.white} />
            </TouchableOpacity>

          </View>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <SecondaryButton title="Add To Cart" onPress={()=>onAddToCard(item._id,value,count,tokenVN)} />
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
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  radiocontainer: {
    flex: 1,
    marginTop: 10,
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
    flex: 1,
   
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailScreen;
