import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  IntroScreen,
  CameraScreen,
  UnmailScreen,
  // UnsubscribeScreen,
  // SwitchEmailScreen,
  // WrongAddressScreen,
  SwitchToEmailScreen,
  CongratsScreen,
} from '../screens';
import {navigationStyles} from '../styles';

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
        options={{
          headerTitle: null,
          headerStyle: {
            backgroundColor: '#771F85',
            ...navigationStyles.headerStyle,
          },
        }}
      />

      <Stack.Screen name="SwitchToEmail" component={SwitchToEmailScreen} />
      <Stack.Screen name="Congrats" component={CongratsScreen} />
    </>
  );
};
