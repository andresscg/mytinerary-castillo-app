import React from 'react'
import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native'

const CityCard = (props) => {
  const {img, _id, name, country} = props.city
  return (
    <Pressable onPress={() => props.navigation.navigate('city', {id:_id})}>
      <ImageBackground style={styles.cityCardContainer} source={{uri:`${img}`}} resizeMode="cover" imageStyle={{borderRadius:15}}>
        <View style={styles.cityText}>
          <Text style={styles.cityName}>{name}</Text>
          <Text style={styles.cityCountry}>{country}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  cityCardContainer: {
    width: 320,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
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
  }
})

export default CityCard
