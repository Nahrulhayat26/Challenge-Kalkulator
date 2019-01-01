import React from  'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './screens/Home'
import AboutScreen from './screens/About'

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
}, {
  initialRouteName: 'Home'
})

export default createAppContainer(RootStack)