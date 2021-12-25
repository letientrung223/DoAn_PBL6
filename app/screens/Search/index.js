import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  FlatList,
  TouchableOpacity,TouchableHighlight
} from "react-native-gesture-handler";
import COLORS from "../../consts/colors";
import { fetchProductList } from "../../redux/home/action";
import { useDispatch, useSelector } from "react-redux";
const { width } = Dimensions.get("screen");
// const cardWidth = width / 2 - 20;
const Search = ({ navigation}) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const dispatch = useDispatch();
  
  useEffect(() => {
    getListProducts();
  }, [dispatch]);

  const getListProducts = () => {
    dispatch(fetchProductList(""));
  };
  const productList = useSelector((state) => state.homeReducer.products);

  const TK = (text) => {
//    console.log(text);
    text.toLowerCase()
    let filteredData = productList.filter((item) => {
      return item.name.toLowerCase().includes(text);
    });
  
    
    //console.log("trong func ",filteredData);

    setFilteredData({filteredData });
  };

  //console.log("ngoai func ",filteredData.filteredData);

  const Card = ({ cloth }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("DetailScreen", cloth)}
      >
        <View style={styles.card}>
          <View style={{ alignItems: "center", top: 2 }}>
            <Image
              source={{ uri: cloth.imageCover }}
              style={{ height: 120, width: 130 }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingTop: 10,
              }}
              numberOfLines={1}
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
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingBottom: 10,
        }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search...."
            marginLeft={10}
            value={searchText}
            onChangeText={setSearchText}
          />
          <FontAwesome
            name="search"
            size={24}
            color={COLORS.grey}
            onPress={() => TK(searchText)}
          />
        </View>
      </View>
      <FlatList
        data={filteredData.filteredData?filteredData.filteredData:productList}
        keyExtractor={(item) => `item-${item.id}`}
        renderItem={({ item }) => <Card cloth={item} />}
      />
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignContent: "center",
    //backgroundColor:'#ff0000'
  },
  card: {
    height: 220,
    width: width,
    marginHorizontal: 10,
    marginBottom: 5,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    marginTop: 10,
    width: "70%",
    height: 60,
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
});
export default Search;
