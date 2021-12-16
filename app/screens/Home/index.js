import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LogBox } from 'react-native';
import asset from "../../../assets/images";
import COLORS from "../../consts/colors";
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

import categories from "../../consts/categories";
import brands from "../../consts/brands";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../redux/home/action";
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const Home = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [selectedBrandIndex, setSelectedBrandIndex] = React.useState(0);

  const dispatch = useDispatch();

  useEffect(() => {

    getListProducts();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    
    
  }, [dispatch]);
   
  const getListProducts = () => {
    dispatch(fetchProductList());
  };

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index? COLORS.green : COLORS.green_dark,
                ...styles.categoryBtn,
              }}
            >
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{
                    height: 30,
                    width: 30,
                    resizeMode: "cover",
                    borderRadius: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.light,
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const ListBrands = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}
      >
        {brands.map((brand, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedBrandIndex(index)}
          >
            <View
              style={{
                backgroundColor:
                  selectedBrandIndex == index ? COLORS.green : COLORS.green_dark,
                ...styles.brandBtn,
              }}
            >
              <View style={styles.brandBtnImgCon}>
                <Image
                  source={brand.image}
                  style={{
                    height: 100,
                    width: 100,
                    resizeMode: "cover",
                    borderRadius: 10,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  // ====================================================
  const Card = ({ cloth }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("DetailScreen", cloth)}
      >
        <View style={styles.card}>
          <View style={{ alignItems: "center", top: 2 }}>
            <Image source={{uri: cloth.imageCover}} style={{ height: 120, width: 130 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingTop: 10,

                // textOverflow: "ellipsis",
                // webkitLineClamp: 3,
                // webkitBoxOrient: "vertical",
                // display: "-webkit-box",
              }}  numberOfLines={1}
            >
              {cloth.name}
            </Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {cloth.brand}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              ${cloth.price}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  // ====================================================

  const productList = useSelector((state) => state.homeReducer.products);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Phan Logo va User */}
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              name="bars"
              size={35}
              color={COLORS.dark}
              style={{ paddingRight: 25 }}
              onPress={() => navigation.navigate("Menu")}
            />
            <Image style={styles.Logo} source={asset.common.logo} />
          </View>
        </View>
        {/* <Image
          source={asset.common.person}
          style={{ height: 35, width: 35, borderRadius: 25 }}
        /> */}
      </View>
      <ScrollView>
        {/* Phan List Categories */}
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              paddingTop: 10,
              paddingLeft: 10,
              marginLeft: 10,
            }}
          >
            Shop By Category
          </Text>
          <ListCategories />
        </View>
        {/* Phan List Brands */}
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              paddingTop: 10,
              paddingLeft: 10,
              marginLeft: 10,
            }}
          >
            Top Brands
          </Text>
          <ListBrands />
        </View>
        {/*Load product card */}
        {/* //{isloading ? <ActivityIndicator/>: ( */}
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={productList}
          renderItem={({ item }) => <Card cloth={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginLeft: 10,
    marginRight: 10,
    
  },
  Logo: {
    paddingTop: 10,
    height: 35,
    width: 220,
  },

  sortContainer: {
    width: 50,
    borderRadius: 10,
    height: 50,
    marginLeft: 10,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  categoriesListContainer: {
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 150,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 5,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  brandBtn: {
    height: 150,
    width: 250,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  brandBtnImgCon: {
    height: 140,
    width: 240,
    backgroundColor: COLORS.dark,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default Home;
