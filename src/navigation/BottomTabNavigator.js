import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostScreen from "../screens/PostScreen";
import MapScreen from "../screens/MapScreen";
import {
  HomeIcon,
  LocationIcon,
  MessageIcon,
  NotificationIcon,
  ProfileIcon,
} from "../components/Icon";

const Tab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F4DFCA",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Post") {
            return <HomeIcon width={focused ? 35 : 25} height={focused ? 35 : 25} />;
          } else if (route.name === "Map") {
            return <LocationIcon width={focused ? 35 : 25} height={focused ? 35 : 25} />;
          } else if (route.name === "Message") {
            return <MessageIcon width={focused ? 35 : 25} height={focused ? 35 : 25} />;
          } else if (route.name === "Notications") {
            return <NotificationIcon width={focused ? 35 : 25} height={focused ? 35 : 25} />;
          } else if (route.name === "Profile") {
            return <ProfileIcon width={focused ? 35 : 25} height={focused ? 35 : 25} />;
          }
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Message" component={MapScreen} />
      <Tab.Screen name="Notications" component={MapScreen} />
      <Tab.Screen name="Profile" component={MapScreen} />
    </Tab.Navigator>
  );
};
