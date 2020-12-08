import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {IntroScreen, HomeScreen, CameraScreen, PreviewScreen} from '../screens';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <>
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{headerLeft: null}}
      />
      <Stack.Screen
        name="Preview"
        component={PreviewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </>
  );
};
