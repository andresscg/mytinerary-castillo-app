import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LogOut from './LogOut'

const SignUp = (props) => {
  const token = useSelector((state) => state.users.token)
  const dispatch = useDispatch();
  const countries = [
    "Egypt",
    "Canada",
    "Australia",
    "Ireland",
    "Argentina",
    "Colombia",
    "Peru",
    "United States",
    "Chile",
    "China",
    "Japan",
    "Pakistan",
    "Colombia",
    "Uruguay",
    "Cuba",
  ];
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photoUrl: "",
    country: "",
  });

  const sendFormHandler = async () => {
    if (
      (newUser.email === "" ||
        newUser.password === "" ||
        newUser.firstName === "" ||
        newUser.lastName === "",
      newUser.photoUrl === "",
      newUser.country === "")
    ) {
      ToastAndroid.showWithGravityAndOffset(
        "⚠️ All fields must be completed",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        60
      );
    } else {
      try {
        let response = await dispatch(usersActions.signUp(newUser));
        console.log(response);
        if (response.data.success) {
          props.navigation.navigate("home");
          ToastAndroid.showWithGravityAndOffset(
            "Welcome Back👋!",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            60
          );
        } else if (response.data.errors) {
          let errors = response.data.errors;
          errors.map((error) =>
            ToastAndroid.showWithGravityAndOffset(
              "⚠️" + error.message,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              60
            )
          );
        } else {
          ToastAndroid.showWithGravityAndOffset(
            "This email is already in use",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            60
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  if(token){
    return <LogOut navigation={props.navigation}/>
  }

  return (
    <ScrollView style={{ backgroundColor: "#242424" }}>
      <Text style={styles.signUpTitle}>Sign Up Now!</Text>
      <View style={styles.deco}></View>
      <View style={styles.inputConteiner}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChange={(e) =>
            setNewUser({ ...newUser, firstName: e.nativeEvent.text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChange={(e) =>
            setNewUser({ ...newUser, lastName: e.nativeEvent.text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChange={(e) =>
            setNewUser({ ...newUser, email: e.nativeEvent.text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Picture Url"
          onChange={(e) =>
            setNewUser({ ...newUser, photoUrl: e.nativeEvent.text })
          }
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChange={(e) =>
            setNewUser({ ...newUser, password: e.nativeEvent.text })
          }
        />
        <SelectDropdown
          style={styles.inputSelect}
          data={countries}
          defaultButtonText={"Select your country"}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={() => {
            return (
              <FontAwesome name="chevron-down" color={"black"} size={15} />
            );
          }}
          dropdownIconPosition={"right"}
          onSelect={(selectedItem) =>
            setNewUser({ ...newUser, country: selectedItem })
          }
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          onValueChange={(e) => userHandler(e, "country")}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={sendFormHandler}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignIn}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate("SignIn")}
        >
          <Text style={styles.textSignIn}>Already a member? Sign In here</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  signUpTitle: {
    marginTop: 20,
    padding: 10,
    alignSelf: "flex-start",
    color: "#fff",
    fontSize: 25,
    fontFamily: "Poppins_700Bold",
  },
  deco: {
    marginTop: -8,
    marginLeft: 14,
    marginBottom: 10,
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
  dropdown1BtnStyle: {
    height: 40,
    width: 260,
    margin: 9,
    padding: 5,
    borderRadius: 2,
    borderColor: "#dad8d8",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default SignUp;
