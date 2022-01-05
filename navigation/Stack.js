import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Cities from "../screens/Cities";
import City from "../screens/City";
import Sign from "../screens/Sign";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export const CitiesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cities"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="cities" component={Cities} />
      <Stack.Screen name="city" component={City} />
    </Stack.Navigator>
  );
};
export const SignStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sign"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="sign" component={Sign} />
    </Stack.Navigator>
  );
};
