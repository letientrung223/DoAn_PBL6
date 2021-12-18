import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,Alert
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import asset from "../../../assets/images";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";

 import {patchUserPassword} from "../../redux/resetpassword/action"
const Cart = ({ navigation }) => {
  const [data, setData ] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword ] = useState("");
  const [repassword, setRepassword ] = useState("");
  const onSendLinkPressed = (code,password,repassword) => {
    console.log(code,password,repassword);
    dispatch(patchUserPassword(code,password,repassword));
    
    
  };

  
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={styles.header}>
        <FontAwesome
          name="arrow-left"
          size={28}
          color="black"
          onPress={() => navigation.navigate("SignInScreen")}
        />
        <Image style={styles.Logo} source={asset.common.logo} />
      </View>
      <View style={styles.root}>
      <CustomInput
        placeholder="Enter your link to reset"
        value={data}
        setValue={setData}
      />
       <CustomInput
        placeholder="Enter your password"
        value={password}
        setValue={setPassword}
      />
         <CustomInput
        placeholder="Re-Enter your password"
        value={repassword}
        setValue={setRepassword}
      />

      <CustomButton 
        
        text="Update" 
        onPress={()=> onSendLinkPressed(data,password,repassword)}

         />
       </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 50,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  Logo: {
    paddingTop: 30,
    height: 35,
    width: 220,
    marginLeft:30,
  },
  root: {
    alignItems: "center",
    padding: 20,
    paddingTop: 10,
  },  

});
export default Cart;
