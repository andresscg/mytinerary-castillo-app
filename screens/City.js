import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Itinerary from '../components/Itinerary'
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  View,
  Text,
} from "react-native";

const City = (props) => {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.allCities);
  const city = useSelector((state) => state.cities.newCity);
  const itineraries = useSelector(
    (state) => state.itineraries.itinerariesByCity
  );

  useEffect(() => {
    let listener = props.navigation.addListener("focus", () => {
      try{
        dispatch(citiesActions.getOneCity(props.route.params.id));
        setLoader(false);
      }catch(err){
        console.log(err);
      }  
      dispatch(itinerariesActions.getItinerariesByCity(props.route.params.id));
    });
    return () => {
      props.navigation.removeListener(listener);
    };
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
      <ImageBackground style={styles.containerCity} source={{uri:`${city.img}`}}>
        <View style={styles.cityText}>
          <Text style={styles.cityName}>{city.name}</Text>
          <Text style={styles.cityCountry}>{city.country}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.lookText}>Look for your next adventure</Text>
      {itineraries.map((itinerary) => <Itinerary data={itinerary} key={itinerary._id}/>)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerCity: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityText:{
    backgroundColor: 'rgba(0,0,0,0.7)',
    width:'100%',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityName:{
    fontFamily: 'Montserrat_500Medium',
    color: 'whitesmoke',
    fontSize: 24
  },
  cityCountry:{
    fontFamily: 'Lato_400Regular',
    color: 'whitesmoke',
    fontSize:16
  },
  lookText: {
    fontFamily: 'Poppins_700Bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15
  }
})

export default City;
