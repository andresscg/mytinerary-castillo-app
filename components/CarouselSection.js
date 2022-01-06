import React from "react";
import { View, ImageBackground, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const CarouselSection = () => {
  const cities = [
    {
      name: "Bogota",
      country: "Colombia",
      img: require("../assets/bogota.jpg"),
    },
    {
      name: "New York",
      country: "USA",
      img: require("../assets/newyork.jpg"),
    },
    {
      name: "Paris",
      country: "France",
      img: require("../assets/paris.jpg"),
    },
    {
      name: "Munich",
      country: "Germany",
      img: require("../assets/munich.jpg"),
    },
    {
      name: "Tokyo",
      country: "Japan",
      img: require("../assets/tokyo.jpg"),
    },
    {
      name: "Amsterdam",
      country: "Netherlands",
      img: require("../assets/amsterdam.jpg"),
    },
    {
      name: "Cairo",
      country: "Egypt",
      img: require("../assets/cairo.jpg"),
    },
    {
      name: "Cancun",
      country: "Mexico",
      img: require("../assets/cancun.jpg"),
    },
    {
      name: "Victoria",
      country: "Seychelles",
      img: require("../assets/victoria.jpg"),
    },
    {
      name: "Sydney",
      country: "Australia",
      img: require("../assets/sydney.jpg"),
    },
    {
      name: "Istambul",
      country: "Turkey",
      img: require("../assets/istambul.jpg"),
    },
    {
      name: "Prague",
      country: "Czech Republic",
      img: require("../assets/prague.jpg"),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View key={item.country} style={styles.slide}>
        <ImageBackground
          source={item.img}
          style={styles.image}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styles.slideText}>
            <Text style={styles.cityName}>{item.name}</Text>
            <Text style={styles.cityCountry}>{item.country}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.containerCarousel}>
      <ImageBackground
        source={require("../assets/carouserl-bg.jpg")}
        resizeMode="cover"
        style={styles.carouselBg}
      >
        <Text style={styles.carouselTitle}>Popular MyTineraries</Text>
        <Carousel
          data={cities}
          sliderWidth={800}
          itemWidth={400}
          renderItem={renderItem}
          layout={"default"}
          loop={true}
          autoplay={true}
        />
      </ImageBackground>
    </View>
  );
};

const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  carouselTitle:{
    color: 'white',
    fontFamily: "Poppins_700Bold",
    marginVertical: 15,
    fontSize: 30
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    height: 400,
    width: 300,
  },
  cityName: {
    color: 'whitesmoke',
    fontSize: 30,
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cityCountry:{
    color: 'whitesmoke',
    fontSize: 25,
    fontFamily: 'Lato_400Regular',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerCarousel: {
    height: 500,
    width: width,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  slide:{
    width: "100%"
  },
  slideText:{
    backgroundColor: 'black',
    paddingVertical: 10,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15
  },
  carouselBg:{
    width: width, 
    height: 500,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CarouselSection;
