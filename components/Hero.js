import React from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, Pressable, Dimensions} from 'react-native'

const Hero = (props) => {
  return (
    <View styles={styles.heroContainer}>
      <ImageBackground source={require('../assets/carBg.jpg')} style={styles.heroBg} resizeMode="cover">
        <Image source={require('../assets/logo_small_icon_only_inverted.png')} style={styles.logo} />
        <View style={styles.heroText}>
          <Text style={styles.heroTitle}>MyTinerary</Text>
          <Text style={styles.heroSubtitle}>Find your perfect trip,</Text>
          <Text style={styles.heroSubtitle}>designed by insiders who know and love their cities!</Text>
        </View>
        <Pressable style={styles.heroBtn} onPress={() => props.navigation.navigate('Cities')}>
          <Text style={styles.btnText}>Find your next experience</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  heroBg:{
    width: width, 
    height: 600,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    width: 150,
    height: 150
  },
  heroContainer:{
    height: 600,
    width: width,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  heroText:{
    paddingBottom: 50
  },
  heroTitle:{
    color:'#ffffff',
    fontFamily:"Poppins_700Bold",
    alignSelf: 'center',
    fontSize: 50
  },
  heroSubtitle:{
    color:'#ffffff',
    fontFamily: "Lato_400Regular",
    alignSelf: 'center',
    fontSize: 30
  },
  heroBtn:{
    backgroundColor:'#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5
  },
  btnText:{
    fontFamily: 'Montserrat_500Medium',
    textTransform: 'uppercase',
    fontSize: 16
  }
})

export default Hero
