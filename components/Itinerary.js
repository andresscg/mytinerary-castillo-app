import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Icon from "react-native-vector-icons/FontAwesome";
import Ioicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  Pressable,
  TextInput,
  ImageBackground,
  ToastAndroid,
} from "react-native";

const Itinerary = (props) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.users._id);
  const token = useSelector((state) => state.users.token);
  const {
    author,
    title,
    duration,
    price,
    _id,
    img,
    likes,
    hashtags,
    comments,
  } = props.data;
  const [isOpen, setOpen] = useState(false);
  const [itineraryLikes, setItineraryLikes] = useState(likes);
  const [activities, setActivities] = useState([]);

  const getActivitiesItinerary = async () => {
    try {
      let response = await dispatch(
        itinerariesActions.getActivitiesItinerary(_id)
      );
      setActivities(response);
    } catch (err) {
      console.error(err);
    }
  };

  const likeItinerary = async () => {
    if (!token) {
      ToastAndroid.showWithGravityAndOffset(
        "⛔ You must be logged in to like this post",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        60
      );
    } else {
      let response = await dispatch(
        itinerariesActions.likeItinerary(_id, token)
      );
      setItineraryLikes(response.data.response);
    }
  };

  const handleClick = () => {
    setOpen(!isOpen);
    if (!isOpen && !activities.length) {
      getActivitiesItinerary();
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#242424" }}>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <View style={styles.contenedorItineraries}>
          <View
            style={{
              alignItems: "center",
              marginVertical: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image source={{ uri: author.imgUrl }} style={styles.authorImage} />
            <Text
              style={{
                color: "black",
                fontFamily: "Montserrat_500Medium",
                fontSize: 25,
                marginLeft: 5,
              }}
            >
              {author.name}
            </Text>
          </View>
          <ImageBackground source={{ uri: img }} style={styles.itineraryImage} imageStyle={{ borderRadius: 15 }}>
            <View style={styles.overlay}></View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Pressable onPress={likeItinerary}>
                {itineraryLikes.includes(id) ? (
                  <Icon name="heart" style={styles.iconoLikes} />
                ) : (
                  <Icon name="heart-o" style={styles.iconoLikes} />
                )}
              </Pressable>
              <Text
                style={{
                  color: "red",
                  fontSize: 30,
                  marginLeft: 6,
                  fontFamily: 'Montserrat_500Medium',
                }}
              >
                {itineraryLikes.length}
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <View>
                <Text
                  style={{ color: "#fff", fontFamily: "Poppins_700Bold", fontSize: 25 }}
                >
                  {title}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 6,
                  justifyContent: "space-around",
                  width: "80%",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ioicons
                    name="hourglass-outline"
                    style={{ fontSize: 25, color: "#fff", marginLeft: 6 }}
                  />
                  <Text style={{ color: "#fff", fontSize: 17, fontFamily:"Lato_400Regular"}}>
                    {duration} hours
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  {[...Array(price)].map((cash, index) => {
                    return (
                      <Icon
                        name="money"
                        style={{
                          fontSize: 25,
                          color: "rgb(8, 184, 8)",
                          marginLeft: 5,
                        }}
                        key={index}
                      />
                    );
                  })}
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginVertical: 10,
                }}
              >
                {hashtags.map((hashtag, index) => (
                  <Text
                    key={index}
                    style={{
                      color: "#1dc4c1",
                      fontSize: 17,
                      fontFamily: 'Montserrat_500Medium',
                      marginRight: 10,
                      marginVertical: 10,
                    }}
                  >
                    #{hashtag}
                  </Text>
                ))}
              </View>
            </View>
          </ImageBackground>
          <View></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedorItineraries: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "95%",
    justifyContent: "center",
    padding: 15,
  },
  itineraryImage: {
    width: "100%",
    height: 300,
    justifyContent: "center"
  },
  overlay:{
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    borderRadius: 15
  },
  authorImage: {
    minWidth: 55,
    height: 57,
    borderRadius: 50,
  },
  iconoLikes: {
    fontSize: 50,
    color: "red",
  },
});
export default Itinerary;
