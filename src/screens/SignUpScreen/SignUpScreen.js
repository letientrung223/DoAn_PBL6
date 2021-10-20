import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import asset from "../../../assets/asset";
const SignUpScreen = () => {
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
      <CustomButton
        text="Already have an account? Sign in"
        onPress={onSignInPressed}
        type="TERTIARY"
      />
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
