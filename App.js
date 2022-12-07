import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostScreen from './src/screens/PostScreen';
import MapScreen from './src/screens/MapScreen';


const PhotoSearchStack = createNativeStackNavigator();

export default function PhotoSearchApp() {
  return (
    <NavigationContainer>
      <PhotoSearchStack.Navigator initialRouteName='Home'>
        <PhotoSearchStack.Screen  name='Home' component={HomeScreen} options={{headerShown: false}} />
        <PhotoSearchStack.Screen  name='Post' component={PostScreen} options={{headerShown: false}} />
        <PhotoSearchStack.Screen  name='Map' component={MapScreen}  options={{headerShown: false}} />
      </PhotoSearchStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
