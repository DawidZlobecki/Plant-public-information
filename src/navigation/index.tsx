import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import AuthenticatedStack from './AuthenticatedStack';
import UnauthenticatedStack from './UnauthenticatedStack';

export type RootStackParamList = {
  AuthenticatedStack: undefined;
  UnauthenticatedStack: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name="AuthenticatedStack"
            component={AuthenticatedStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="UnauthenticatedStack"
            component={UnauthenticatedStack}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
