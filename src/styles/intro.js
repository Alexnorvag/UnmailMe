import {StyleSheet} from 'react-native';

export const introStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxHeight: '80%',
  },
  imageContainer: {
    flex: 2,
  },
  imageIndentContainer: {
    flex: 1,
    marginVertical: '8%',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  dotStyle: {
    backgroundColor: '#C4C4C4',
  },
  activeDotStyle: {
    backgroundColor: '#B538CA',
  },
});
