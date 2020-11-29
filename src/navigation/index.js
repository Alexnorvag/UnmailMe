import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';



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
        <Stack.Navigator headerMode="float">{}</Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
