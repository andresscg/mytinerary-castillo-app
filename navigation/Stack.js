import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Cities from "../screens/Cities";
import City from "../screens/City";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import UserInfo from "../screens/UserInfo";
import LogOut from "../screens/LogOut";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};
export const CitiesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="cities" component={Cities} />
      <Stack.Screen name="city" component={City} />
    </Stack.Navigator>
  );
};
export const SignInStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="userinfo" component={UserInfo} />
    </Stack.Navigator>
  );
};
export const SignUpStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="logout" component={LogOut} />
    </Stack.Navigator>
  );
};
