import React from 'react'
import Video from 'react-native-video'
import {StyleSheet, Text, View, Dimensions} from 'react-native'
import {Button} from 'react-native-elements'

const Hero = (props) => {
  return (
    <View styles={styles.heroContainer}>
      <Video source={require("../assets/bg-video.mp4")} style={styles.backgroundVideo} muted={true} repeat={true} resizeMode={"cover"} rate={1.0} ignoreSilentSwitch={'obey'} />
      <View style={styles.heroText}>
        <Text style={styles.heroTitle}>MyTinerary</Text>
        <Text style={styles.heroSubtitle}>Find your perfect trip,</Text>
        <Text style={styles.heroSubtitle}>designed by insiders who know and love their cities!</Text>
      </View>
      <Button title="Find your next experience" style={styles.heroBtn} />
    </View>
  )
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  backgroundVideo:{
    width: width, 
    height: height,
    position: 'fixed',
    zIndex: -1,
    elevation: -1
  },
  heroContainer:{
    height: height,
    width: width,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'contain'
  }

})

export default Hero
