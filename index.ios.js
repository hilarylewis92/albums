/// index.ios.js - place code in here for IOS!!!

// import library to help create a Component
import React from 'react'
import { AppRegistry } from 'react-native'
import Header from './src/components/header'

// create Component
const App = () => (
  <Header />
)

//render to device
AppRegistry.registerComponent('albums', () => App)
