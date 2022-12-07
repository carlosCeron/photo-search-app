import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, LocationIcon, NotificationIcon, MessageIcon, ProfileIcon } from '../components/Icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { logo } from '../../assets';
import { Theme } from '../Theme/Theme';

const PostScreen = () => {

  const {top} = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, marginTop: top}}>
      <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 16}}>
        <Image style={{
          width: 30,
          height: 30, 
          marginRight: 15
        }} source={logo} />
        <Text style={{...Theme.primaryFont, fontSize: 18, fontWeight: 'bold', color: '#AB7E57'}}>PhotoSearch</Text>
      </View>
      <View style={{width: '100%', backgroundColor: '#F4DFCA', height: 183, paddingHorizontal: 16, marginTop: 20, paddingVertical: 10}}>
        <Text style={{...Theme.primaryFont, fontSize: 14, color: '#3A3636', fontWeight: 'bold'}}>My collections</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        </ScrollView>
        <Text style={{...Theme.primaryFont, fontSize: 14, color: '#3A3636', fontWeight: 'bold'}} >Activity feed</Text>
      </View>
    </View>
  )
}

export default PostScreen