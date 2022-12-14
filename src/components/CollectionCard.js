import { View, Text, Image } from 'react-native'
import React from 'react'
import { collectionImg } from '../../assets'
import { Theme } from '../Theme/Theme'

const CollectionCard = ({title}) => {
  return (
    <View style={{width: 100, height: 60, marginRight: 10, marginTop: 10}}>
      <Image source={collectionImg} style={{width: '100%', height: 90,  borderRadius: 10}} />
      <Text style={{...Theme.regularFontFamily, fontSize: 12}}>{title}</Text>
    </View>
  )
}

export default CollectionCard