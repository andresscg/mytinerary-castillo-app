import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import Hero from '../components/Hero'
import CarouselSection from '../components/CarouselSection'

const Home = () => {
  return (
    <ScrollView>
      <Hero />
      <CarouselSection />
    </ScrollView>
  )
}

export default Home
