import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

export type UnauthenticatedStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<UnauthenticatedStackParamList>();

const UnauthenticatedStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default UnauthenticatedStack;
