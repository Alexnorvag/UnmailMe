import {StyleSheet} from 'react-native';
import font from '../themes/fonts';

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    fontSize: 17,
    padding: 15,
    marginVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#00000033',
  },
  errorValidationText: {
    color: '#ff0000',
    fontSize: 14,
    paddingLeft: 15,
    marginBottom: 10,
  },
  button: {
    height: 56,
    width: '60%',
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonMagical: {
    backgroundColor: '#771f85',
  },
  buttonTextDefault: {
    color: '#fff',
    fontSize: 20,
    fontFamily: font.type.bold,
  },
  titleBold: {
    fontFamily: font.type.bold,
    fontSize: 27,
    textAlign: 'center',
    marginHorizontal: '15%',
  },
  description: {
    fontFamily: font.type.primary,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: '15%',
  },
  marginVerticalMedium: {
    marginTop: '2%',
    marginBottom: '1%',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  imageContainerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
