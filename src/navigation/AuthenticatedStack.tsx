import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

export type AuthenticatedStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
