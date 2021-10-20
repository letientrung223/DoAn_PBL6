import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import asset from "../../../assets/asset";
const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSignInPressed = () => {
    console.warn("Sign in");
  };
  const onSignInWithGGPressed = () => {
    console.warn("Sign in with GG");
  };
  const onSignInWithFBPressed = () => {
    console.warn("Sign in with Fb");
  };
  const onFogotPassWordPressed = () => {
    console.warn("Fogot Password");
  };
  const onSignUpPressed = () => {
    console.warn("Sign Up");
  };
  return (
    <View style={styles.root}>
      <Image
        source={asset.logo}
        style={{ width: '70%', height: 159 }}
        resizeMode="contain"
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

      <CustomButton text="Sign in" onPress={onSignInPressed} />
      <CustomButton
        text="Fogot Password?"
        onPress={onFogotPassWordPressed}
        type="TERTIARY"
      />

      <Text style={styles.textStyle}>
        ___________________Or___________________
      </Text>

      <CustomButton
        text="Sign in with Google"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        onPress={onSignInWithGGPressed}
      />
      <CustomButton
        text="Sign in with Facebook"
        bgColor="#7689EF"
        fgColor="#3504FA"
        onPress={onSignInWithFBPressed}
      />
      <CustomButton
        text="Don’t have any account? Sign up"
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    marginTop: 10,
    width: "70%",
    height: 60,
  },
  textStyle: {
    color: "#B0A7A7",
  },
});
export default SignInScreen;
