/// index.ios.js - place code in here for IOS!!!

// import library to help create a Component
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// create Component
const App = () => (
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>
)

//render to device
AppRegistry.registerComponent('albums', () => App)
