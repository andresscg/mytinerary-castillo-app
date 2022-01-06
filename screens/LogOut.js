import React from "react";
import { useDispatch } from "react-redux";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import usersActions from "../redux/actions/usersActions";

const LogOut = (props) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.logOutContainer}>
      <Text style={styles.logOutText}>Are you sure you want to log out?</Text>
      <TouchableOpacity
        style={styles.logOutBtn}
        onPress={() => {
          dispatch(usersActions.signOut());
          props.navigation.navigate("home");
        }}
      >
        <Text style={styles.logOutBtnText}>Yes!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logOutContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 600,
  },
  logOutText: {
    fontFamily: "Poppins_700Bold",
    color: "#000",
    fontSize: 40,
    textAlign: "center"
  },
  logOutBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    marginTop: 20,
    backgroundColor: "#a72626",
    width: 150,
    height: 50,
    zIndex: 1,
  },
  logOutBtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default LogOut;
