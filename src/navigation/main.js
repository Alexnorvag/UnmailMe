import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {IntroScreen, HomeScreen} from '../screens';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <>
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{headerLeft: null}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </>
  );
};
