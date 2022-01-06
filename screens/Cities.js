import React, { useState, useEffect } from "react";
import citiesActions from "../redux/actions/citiesActions";
import CityCard from "../components/CityCard";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";

const Cities = (props) => {
  const [loader, setLoader] = useState(true);
  const cities = useSelector((state) => state.cities.filteredCities);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(citiesActions.getCities());
      setLoader(false);
    } catch (err) {
      console.log(err);
      return false;
    }
  }, []);

  if (loader) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#a72626" />
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "#242424" }}>
      <Text style={styles.citiesTitle}>Find your next adventure</Text>
      <TextInput
        placeholder="Search a destination"
        style={styles.input}
        onChange={(e) =>
          dispatch(citiesActions.filterCities(e.nativeEvent.text))
        }
      />
      <View style={styles.citiesContainer}>
        {cities.map((city) => (
          <CityCard city={city} key={city._id} navigation={props.navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  citiesTitle: {
    fontFamily: "Poppins_700Bold",
    color: "white",
    fontSize: 30,
    textAlign: "center",
    paddingTop: 20
  },
  input: {
    width: 320,
    padding: 10,
    alignSelf: "center",
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 20
  },
  citiesContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default Cities;
