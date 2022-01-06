import React from 'react'
import {useSelector} from 'react-redux'
import {View, Image, Text, StyleSheet} from 'react-native'

const UserInfo = () => {
  const {photoUrl, firstName} = useSelector((state) => state.users)
  return (
    <View style={styles.infoContainer}>
      <Image source={{uri:`${photoUrl}`}} style={styles.photo} />
      <Text style={styles.name}>{firstName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 600
  },
  photo:{
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: "cover"
  }, 
  name: {
    fontFamily: 'Poppins_700Bold',
    color:"#000",
    fontSize: 40
  }
})

export default UserInfo
