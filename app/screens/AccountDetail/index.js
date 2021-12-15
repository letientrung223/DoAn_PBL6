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
  
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { ScrollView } from "react-native-gesture-handler";
import asset from "../../../assets/images/index";
import CustomButton from "../../components/CustomButton";
import RadioGroup from 'react-native-radio-buttons-group';
import COLORS from "../../consts/colors";

import {postCheckLogout,} from "../../redux/login/action";
import { useDispatch, useSelector } from "react-redux";
// const ListSelect = [
//   { id: "Dashboard",      title: " Dashboard",       icons: "home-outline" },
//   { id: "Order",          title: " Order",           icons: "cart-outline" },
//   { id: "Account Detail", title: " Account Detail",  icons: "person-outline" },
//   { id: "Change Password",title: "Change Password",  icons: "key-outline" },
//   { id: "Log out",        title: " Log out",         icons: "log-out-outline" },
// ];
const radioButtonsData = [
  {
    id: '1',
    label: 'Male',
    value: 'option1',
    color: '#9C9999',
    selected: true,
  },
  {
    id: '2',
    label: 'Female',
    value: 'option2',
    color: '#9C9999',
    selected: false,
  },
];
// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <View>
//       <Ionicons name={item.icons} size={26} color="black" />
//     </View>
//     <View>
//       <Text style={[styles.text, textColor]}> {item.title}</Text>
//     </View>
//   </TouchableOpacity>
// );
const AccountDetail = ({navigation}) => {
  const dispatch =useDispatch();
  const onLogOut = () => {
    dispatch(postCheckLogout());
    
  };  
  const onSavePressed = () => {
    console.warn("Saved");
  };

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const onPressRadioButton = radioButtonsArray => {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };

  // const [selectedId, setSelectedId] = useState(null);
  // const renderItem = ({ item }) => {
  //   const backgroundColor = item.id === selectedId ? "#9C9999" : "#E2E2E2";
  //   const color = item.id === selectedId ? "white" : "black";

  //   return (
  //     <Item
  //       item={item}
  //       onPress={() => setSelectedId(item.id)}
  //       backgroundColor={{ backgroundColor }}
  //       textColor={{ color }}
  //     />
  //   );
  // };

  return (
   
    <ScrollView style={{marginTop:60}}>
      <View style={styles.header}>
        <Image
          source={asset.common.logo}
          style={{ width: 176, height: 42 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.avt}>
        <Image
          source={require("../../../assets/images/common/person.png")}
          style={{ width: 370, height: 250, borderRadius: 10 }}
          
        />
      </View>
      <SafeAreaView>
        {/* <FlatList
          data={ListSelect}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        /> */}
          <TouchableOpacity onPress={()=>{navigation.navigate("User")}} 
            style={{ backgroundColor:'#E2E2E2',height:50,padding:10,marginHorizontal:10,marginTop:5}} >
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Ionicons name='home' size={26} color="black" /> 
            <Text style={{fontSize:24}}> Dashboard</Text>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("OrderScreen")}} 
            style={{ backgroundColor:'#E2E2E2',height:50,padding:10,marginHorizontal:10,marginTop:5}} >
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Ionicons name='cart' size={26} color="black" /> 
            <Text style={{fontSize:24}}> Order</Text>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("AccountDetail")}} 
            style={{ backgroundColor:COLORS.grey,height:50,padding:10,marginHorizontal:10,marginTop:5}} >
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Ionicons name='person' size={26} color="black" /> 
            <Text style={{fontSize:24}}> Account Detail</Text>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("ChangePassword")}} 
            style={{ backgroundColor:'#E2E2E2',height:50,padding:10,marginHorizontal:10,marginTop:5}} >
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Ionicons name='key' size={26} color="black" /> 
            <Text style={{fontSize:24}}> Change Password</Text>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onLogOut()} 
            style={{ backgroundColor:'#E2E2E2',height:50,padding:10,marginHorizontal:10,marginTop:5}} >
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Ionicons name='log-out' size={26} color="black" /> 
            <Text style={{fontSize:24}}> Log Out</Text>
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
          Account Detail
        </Text>
        <Text style={styles.text}>
          First Name
        </Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.text}>
          Last Name
        </Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.text}>
          Display Name
        </Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.text}>
          Phone/Number
        </Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.text}>
          Email
        </Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.text}>
          Gender
        </Text>
        <View style={styles.radiocontainer}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
        </View>
        <View style={{paddingHorizontal:10}}>
        <CustomButton
        text="Save"
        bgColor="#3D3D3D"
        fgColor="#ffffff"
        onPress={onSavePressed}              
        />
      </View>

       
      </SafeAreaView>
    </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  header: {
    alignItems: "center",
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
  textInput:{
    height: 40,
    
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor:"#FFFFFF",
  },
  radiocontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:10,
  },
  text:{
    fontSize: 20,
    fontWeight: "normal",
    paddingTop: 10,
    paddingLeft: 10
  },


});
export default AccountDetail;
