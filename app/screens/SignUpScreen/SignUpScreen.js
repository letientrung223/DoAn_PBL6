import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Image, StyleSheet,Text } from "react-native";
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import asset from "../../../assets/images/index";
import COLORS from "../../consts/colors"
import { useDispatch, useSelector } from "react-redux";

import {postCheckSignUp} from "../../redux/signup/action";

const SignUpScreen = ({navigation}) => {
const dispatch =useDispatch();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  
  const onSignUpPressed = (username,email, password,repassword) => {

    dispatch(postCheckSignUp(username,email, password,repassword));
    console.log("onSignUpPressed with ",username,email,password,repassword); 
  };


  return (
    <View style={styles.root}>
      <Image
        source={asset.common.logo}
        style={{ width: "70%", height: 159 }}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUserName}
      />
      <CustomInput
        placeholder="Your email address"
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        placeholder="Your password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
       <CustomInput
        placeholder="Re-password"
        value={repassword}
        setValue={setRepassword}
        secureTextEntry={true}
      />

      <CustomButton 
        text="Sign up" 
        onPress={()=>onSignUpPressed(username,email,password,repassword)} />
      
      <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.grey, fontWeight: 'bold'}}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 30,
  },
  logo: {
    width: 60,
    height: 90,
  },
  textStyle: {
    color: "#B0A7A7",
  },
});
export default SignUpScreen;
