import {Platform, StyleSheet} from 'react-native';

export const navigationStyles = StyleSheet.create({
  haederStyle: {
    elevation: 0,
    shadowColor: 'transparent',
  },
  headerTitleContainerStyle: {
    height: '100%',
    paddingTop: 10,
  },
  headerTitle: {
    ...Platform.select({
      ios: {
        fontWeight: '300',
      },
      android: {
        fontFamily: 'Roboto-Light',
      },
    }),
    color: 'rgba(0, 0, 0, 0.82)',
  },
});
