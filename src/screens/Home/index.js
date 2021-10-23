import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView,Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import asset from "../../../assets/asset";
import COLORS from "../../../src/consts/colors";
import {FlatList,ScrollView,TextInput,TouchableHighlight,TouchableOpacity,} from "react-native-gesture-handler";
import categories from "../../../src/consts/categories";
import cloths from './../../consts/cloths';


const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Home = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.grey
                    : COLORS.grey_light,
                ...styles.categoryBtn,
              }}>
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 30, width: 30, resizeMode: 'cover',borderRadius: 10 }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.light,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  // ====================================================
    const Card = ({cloth}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailScreen',cloth)}>
        <View style={styles.card}>
          <View style={{alignItems: 'center', top: 2}}>
            <Image source={cloth.image} style={{height: 120, width: 130}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{cloth.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {cloth.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${cloth.price}
            </Text>
            <View style={styles.addToCartBtn}>
              <FontAwesome name="plus" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  // ====================================================

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Phan Logo va User */}
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.Logo} source={asset.logo} />
          </View>
          <Text style={{ fontSize: 14, fontWeight: "normal", paddingLeft: 5 }}>
            How are you today!
          </Text>
        </View>
        <Image
          source={require("../../../assets/images/person.png")}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>
      {/* Phan Search va Sort */}
      <View style={{ marginTop: 30, flexDirection: "row", paddingHorizontal: 20 }}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color={COLORS.grey} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search...."
            marginLeft={10}
          />
        </View>
        <View style={styles.sortContainer}>
          <FontAwesome name="sort-amount-asc" size={24} color={COLORS.white} />
        </View>
      </View>
      {/* Phan List Categories */}
      <View>
        <ListCategories/>
      </View>
      {/*Load product card */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={cloths}
        renderItem={({item}) => <Card cloth={item} />}
      />
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
    height: 30,
    width: 190,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.grey_light,
    alignItems: "center",
    paddingHorizontal: 20,
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
  categoriesListContainer:{
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn:{
    height: 45,
    width: 150,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
  },

});
export default Home;
