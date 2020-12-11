import {StyleSheet} from 'react-native';
import font from '../themes/fonts'

export const navigationStyles = StyleSheet.create({
  haederStyle: {
    elevation: 0,
    shadowColor: 'transparent',
  },
  headerMenu: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#590866',
    borderRadius: 16,
    color: '#fff',
    overflow: 'hidden',
  },
  headerTitleContainerStyle: {
    height: '100%',
    paddingTop: 10,
  },
  headerTitle: {
    fontFamily: font.type.light,
    color: 'rgba(0, 0, 0, 0.82)',
  },
});
