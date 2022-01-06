import React from 'react'
import AppLoading from 'expo-app-loading'
import {useFonts, Poppins_700Bold} from '@expo-google-fonts/poppins'
import {Lato_400Regular} from '@expo-google-fonts/lato'
import {Montserrat_500Medium} from '@expo-google-fonts/montserrat'
import { NavigationContainer} from '@react-navigation/native'
import Navigator from './navigation/Tab'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'


const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Lato_400Regular,
    Montserrat_500Medium,
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }else{
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    )
  }
}

export default App

