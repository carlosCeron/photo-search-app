import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostScreen from './src/screens/PostScreen';
import MapScreen from './src/screens/MapScreen';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { useFonts } from 'expo-font';


const PhotoSearchStack = createNativeStackNavigator();

export default function PhotoSearchApp() {

  const [fontsLoaded] = useFonts({
    'Kalam-Bold': require('./assets/fonts/Kalam-Bold.ttf'),
    'Kalam-Light': require('./assets/fonts/Kalam-Light.ttf'),
    'Kalam-Regular': require('./assets/fonts/Kalam-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <PhotoSearchStack.Navigator initialRouteName='Home'>
        <PhotoSearchStack.Screen  name='Home' component={HomeScreen} options={{headerShown: false}} />
        <PhotoSearchStack.Screen  name='Post' component={BottomTabNavigator} options={{headerShown: false}} />
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
