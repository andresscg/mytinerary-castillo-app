import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeStack, CitiesStack, SignStack} from './Stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' tabBarOptions={{activeTintColor: '#a72626'}}>
      <Tab.Screen name='Home' component={HomeStack} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size}/>
        )
      }} />
      <Tab.Screen name='Cities' component={CitiesStack} options={{
        tabBarLabel: 'Cities',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="city" color={color} size={size}/>
        )
      }} />
      <Tab.Screen name='Sign' component={SignStack} options={{
        tabBarLabel: 'Sign',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={size}/>
        )
      }} />
    </Tab.Navigator>
  )
}

export default Navigator