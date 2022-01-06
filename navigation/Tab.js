import React, { Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack, CitiesStack, SignInStack, SignUpStack } from "./Stack";
import { Image } from "react-native";
import { useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "react-native-elements/dist/helpers";

const Tab = createBottomTabNavigator();

const Navigator = (props) => {
  const { token, firstName, photoUrl } = useSelector((state) => state.users);
  const title = token ? `Welcome ${firstName}` : "MyTinerary";

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#a72626",
        tabBarStyle: [
          { backgroundColor: "#fff", height: 60, paddingBottom: 5 },
          null,
        ],
        tabBarLabelStyle: [{ fontFamily: "Montserrat_500Medium" }],
        headerStyle: {
          backgroundColor: "#a72626",
        },
        headerTitle: title,
        headerTitleStyle: {
          fontFamily: "Poppins_700Bold",
          color: "#fff",
          textTransform: "uppercase",
        },
        headerTitleAlign: "center",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cities"
        component={CitiesStack}
        options={{
          tabBarLabel: "Cities",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="city" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={token ? "UserInfo" : "SignIn"}
        component={SignInStack}
        options={{
          tabBarLabel: token ? firstName : "Sign In",
          tabBarIcon: ({ color, size }) =>
            token ? (
              <Image source={{ uri: `${photoUrl}` }} style={{width: 25, height: 25}}/>
            ) : (
              <MaterialCommunityIcons
                name="login-variant"
                color={color}
                size={size}
              />
            ),
        }}
      />
      <Tab.Screen
        name={token ? "LogOut" : "SignUp"}
        component={SignUpStack}
        options={{
          tabBarLabel: token ? "Log Out" : "Sign Up",
          tabBarIcon: ({ color, size }) =>
            token ? (
              <MaterialCommunityIcons
                name="account-minus"
                color={color}
                size={size}
              />
            ) : (
              <MaterialCommunityIcons
                name="account-plus"
                color={color}
                size={size}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
