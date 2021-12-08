import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Alert,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";

class Expandable_ListView extends Component {
  constructor() {
    super();

    this.state = {
      layout_Height: 0,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null,
        };
      });
    } else {
      this.setState(() => {
        return {
          layout_Height: 0,
        };
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  show_Selected_Category = (item) => {
    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);
  };

  render() {
    return (
      <View style={styles.Panel_Holder}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.category_View}
        >
          <Text style={styles.category_Text}>
            {this.props.item.category_Name}{" "}
          </Text>

          <FontAwesome name="chevron-down" size={24} color= "white" style={styles.iconStyle}/>
        </TouchableOpacity>

        <View style={{ height: this.state.layout_Height, overflow: "hidden" }}>
          {this.props.item.sub_Category.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={styles.sub_Category_Text}
              onPress={this.show_Selected_Category.bind(this, item.name)}
            >
              <Text> {item.name} </Text>

              <View
                style={{ width: "100%", height: 1, backgroundColor: "#DF6200" }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default class Home extends Component {
  constructor() {
    super();

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const array = [
      {
        expanded: false,
        category_Name: "Demos",
        sub_Category: [
          { id: 1, name: "Modern" },
          { id: 2, name: "Standard" },
          { id: 3, name: "Minimal" },
          { id: 4, name: "Vintage" },
          { id: 5, name: "Classic" },
          { id: 6, name: "Trendy" },
          { id: 7, name: "Elegant" },
        ],
      },

      {
        expanded: false,
        category_Name: "Top Wear",
        sub_Category: [
          { id: 8, name: "T-Shirt" },
          { id: 9, name: "Casual Shirts" },
          { id: 10, name: "Formal Shirts" },
          { id: 11, name: "Blazwers & Coat" },
          { id: 12, name: "Suit" },
          { id: 13, name: "Jackets" },
        ],
      },

      {
        expanded: false,
        category_Name: "Fashion Accessories",
        sub_Category: [
          { id: 14, name: "Belt,Scarves and More" },
          { id: 15, name: "Watch & Wearables" },
          { id: 16, name: "Sunglasses & Frames" },
          { id: 17, name: "Home Theatres" },
        ],
      },
      {
        expanded: false,
        category_Name: "Footwear",
        sub_Category: [
          { id: 18, name: "Flats" },
          { id: 19, name: "Casual Shoes" },
          { id: 20, name: "Heels" },
          { id: 21, name: "Boots" },
        ],
      },
      {
        expanded: false,
        category_Name: "Sports & Active Wear",
        sub_Category: [
          { id: 22, name: "Clothing" },
          { id: 23, name: "Footwear" },
          { id: 24, name: "Sports Accessories" },
        ],
      },
    ];

    this.state = { AccordionData: [...array] };
  }

  update_Layout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index]["expanded"] = !array[index]["expanded"];

    this.setState(() => {
      return {
        AccordionData: array,
      };
    });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}
        >
          <FontAwesome name="close" size={25} color="black" onPress={() =>this.props.navigation.navigate('HomeScreen')}/>
          <View style={{paddingTop:20}}>
            {this.state.AccordionData.map((item, key) => (
              <Expandable_ListView
                key={item.category_Name}
                onClickFunction={this.update_Layout.bind(this, key)}
                item={item}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 60,
    backgroundColor: "#F5FCFF",
  },
  Panel_Holder: {
    borderRadius: 10,
  },

  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: "flex-end",
    alignItems: "center",
 
    
  },

  sub_Category_Text: {
    fontSize: 18,
    color: "#000",
    padding: 10,
  },

  category_Text: {
    textAlign: "left",
    color: "#fff",
    fontSize: 21,
    padding: 10,
  },

  category_View: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#B0B5B8",
  },

  Btn: {
    padding: 10,
    backgroundColor: "#FF6F00",
  },
});
