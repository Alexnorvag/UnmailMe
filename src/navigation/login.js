import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '../screens';

const Stack = createStackNavigator();

export const LoginStack = () => {
  return (
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerLeft: null,
      }}
    />
  );
};
