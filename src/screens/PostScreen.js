import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, LocationIcon, NotificationIcon, MessageIcon, ProfileIcon } from '../components/Icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { logo } from '../../assets';
import { Theme } from '../Theme/Theme';
import Card from '../components/Card';
import CollectionCard from '../components/CollectionCard';

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
      <View style={{width: '100%', backgroundColor: '#F4DFCA', height: 183, paddingHorizontal: 16, marginTop: 20, paddingVertical: 5, justifyContent: 'space-around'}}>
        <Text style={{...Theme.primaryFont, fontSize: 14, color: '#3A3636', fontWeight: 'bold'}}>My collections</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CollectionCard title="Wedding" />
          <CollectionCard title="Outdoors" />
          <CollectionCard title="Portraits" />
          <CollectionCard title="Travel" />
          <CollectionCard title="Pets" />
          <CollectionCard title="Christmas" />
          <CollectionCard title="Products" />
          <CollectionCard title="Halloween" />
        </ScrollView>
        <Text style={{...Theme.primaryFont, fontSize: 14, color: '#3A3636', fontWeight: 'bold'}} >Activity feed</Text>
      </View>
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </View>
  )
}

export default PostScreen