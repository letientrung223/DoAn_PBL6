import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
const { width } = Dimensions.get("screen");

// import { SecondaryButton } from "../../components/Button";
const cardWidth = width / 2 - 20;

const OrderDetailScreen = ({ navigation, route }) => {
  const list_product = route.params;
  const Card = ({ cloth }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={()=>{}}
      >
        <View style={styles.card}>
          <View style={{ alignItems: "center", top: 2 }}>
            <Image
              source={{ uri: cloth.image }}
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
             Quantity: {cloth.qty}
            </Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
             Size: {cloth.size}
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
             Price: ${cloth.price}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, marginTop: 30 }}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={28}
          onPress={() => navigation.navigate("OrderScreen")}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list_product}
        renderItem={({ item }) => (
          <Card
            cloth={item}
            // keyExtractor={(item, index) => index.toString()}
          />
        )}
        keyExtractor={ ( item, index ) => `${index}` }

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  card: {
    height: 250,
    width: 340,
    marginHorizontal: 10,
    marginBottom: 5,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 170,
    backgroundColor: COLORS.primary,
    // backgroundColor: '#008080',
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
});

export default OrderDetailScreen;
