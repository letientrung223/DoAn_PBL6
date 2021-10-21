import 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Image, StyleSheet,Text } from "react-native";
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import asset from "../../../assets/asset";
import COLORS from "../../consts/colors"
const SignUpScreen = ({navigation}) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onSignUpPressed = () => {
    console.warn("Sign up");
  };

  const onSignInPressed = () => {
    console.warn("Change screen");
  };

  return (
    <View style={styles.root}>
      <Image
        source={asset.logo}
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

      <CustomButton text="Sign up" onPress={onSignUpPressed} />
      
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
