import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from "react-native";

import UserInfo from "./UserInfo";

const Sign = (props) => {
  const [logInUser, setLogInUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.token)

  const logInHandler = async () => {
    if (logInUser.email === "" || logInUser.password === "") {
      ToastAndroid.showWithGravityAndOffset(
        "⚠️ Ups! All fields are required",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        60
      );
    } else {
      try {
        let res = await dispatch(usersActions.signIn(logInUser));
        if (!res.data.success) {
          ToastAndroid.showWithGravityAndOffset(
            "❌ Ups! Email or password are wrong",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            60
          );
        } else {
          ToastAndroid.showWithGravityAndOffset(
            "Welcome back! 🤙",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            60
          );
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  };

  if(token){
    return <UserInfo />
  }

  return (
    <ScrollView style={{ backgroundColor: "#242424"}}>
      <Text style={styles.signInTitle}>Sign In To Your Account!</Text>
      <View style={styles.deco}></View>
      <View style={styles.textCont}>
        <Text style={styles.signInText}>Continue sharing experiences</Text>
        <Text style={styles.signInText}>
          Or search for a new one!
        </Text>
      </View>
      <View style={styles.inputConteiner}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChange={(e) =>
            setLogInUser({ ...logInUser, email: e.nativeEvent.text })
          }
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChange={(e) =>
            setLogInUser({ ...logInUser, password: e.nativeEvent.text })
          }
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={logInHandler}
        >
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignIn}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          <Text style={styles.textSignIn}>
            Don't have an account? Sign up here
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signInBack: {
    width: "100%",
    height: 695,
    alignItems: "center",
  },
  input: {
    height: 45,
    width: 260,
    margin: 8,
    padding: 10,
    borderRadius: 2,
    borderColor: "#a72626",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
  },
  signInTitle: {
    marginTop: 40,
    padding: 10,
    alignSelf: "flex-start",
    color: "white",
    fontSize: 35,
    fontFamily: "Poppins_700Bold",
  },
  deco: {
    marginTop: -8,
    marginLeft: 14,
    marginBottom: 15,
    alignSelf: "flex-start",
    backgroundColor: "#a72626",
    width: 320,
    height: 10,
  },

  inputConteiner: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    marginTop: 15,
    backgroundColor: "white",
    width: 150,
    height: 50,
    zIndex: 1,
    borderColor: "#a72626",
    borderStyle: "solid",
    borderWidth: 2
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: 'Montserrat_500Medium',
    textTransform: "uppercase",
    letterSpacing: 0.25,
    color: "black",
  },
  signInText: {
    padding: 8,
    fontSize: 17,
    fontFamily: "Montserrat_500Medium",
    color: "white",
    textAlign: "center",
  },
  textCont: {
    marginVertical: 10,
  },
  buttonSignIn: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: 40,
    zIndex: 1,
  },
  textSignIn: {
    fontSize: 15,
    fontFamily: 'Lato_400Regular',
    letterSpacing: 0.2,
    color: "white",
  },
});

export default Sign;
