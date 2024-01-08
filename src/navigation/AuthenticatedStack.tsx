import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import CollectionScreen from '../screens/CollectionScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import PlantDetailScreen from '../screens/PlantDetailScreen';

export type AuthenticatedStackParamList = {
  Home: undefined;
  Calendar: undefined;
  Collection: undefined;
  Notifications: undefined;
  More: undefined;
  PlantDetail: undefined;
};

const Stack = createStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({ current }) => {
          return {
            cardStyle: {
              opacity: current.progress,
            },
          };
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PlantDetail" component={PlantDetailScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="Collection" component={CollectionScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="More" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
