import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  IntroScreen,
  CameraScreen,
  UnmailScreen,
  PreviewScreen,
  HomeScreen,
} from '../screens';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <>
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{headerLeft: null}}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Unmail"
        component={UnmailScreen}
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
