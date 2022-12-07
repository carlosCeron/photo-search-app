import { View, Text, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { cameraBackground } from '../../assets/index'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={cameraBackground} resizeMode="cover" style={{flex: 1}}>
        <View style={{
          width: '100%',
          height: 212,
          backgroundColor: 'rgba(52, 52, 52, 0.7)',
          position: 'absolute',
          bottom: 0,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text  style={{fontSize: 36, fontWeight: '400', lineHeight: 45, color: '#FFFFFF', marginBottom: 5}} >PhotoSearch</Text>
          <Text  style={{fontSize: 16, fontWeight: '400', color: '#FFFFFF', marginBottom: 15}} >Find your best photographer in the city</Text>
          <Pressable onPress={() => navigation.navigate('Post')} style={{width: 157, height: 47, borderRadius: 23, backgroundColor: '#AB7E57', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 22, fontWeight: '400', lineHeight: 27, color: '#FFFFFF'}}>Search</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen