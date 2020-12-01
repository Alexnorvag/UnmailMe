import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HeaderTitle, HeaderMenu} from '../components';
import {navigationStyles} from '../styles';
import {LoginStack} from './login';
import {MainStack} from './main';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitle: () => (
              <HeaderTitle styles={navigationStyles.headerTitle} />
            ),
            headerStyle: navigationStyles.haederStyle,
            headerTitleContainerStyle:
              navigationStyles.headerTitleContainerStyle,
            headerLeft: () => (
              <HeaderMenu styles={navigationStyles.headerMenu} />
            ),
            headerTitleAlign: 'center',
          }}>
          {/* change true to isAuthed */}
          {false ? LoginStack() : MainStack()}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
