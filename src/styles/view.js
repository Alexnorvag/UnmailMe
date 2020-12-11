import {StyleSheet} from 'react-native';

import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../constants';
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
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSmall: {
    height: 50,
    width: '45%',
  },
  buttonMedium: {
    height: 56,
    width: '60%',
  },
  buttonMagical: {
    backgroundColor: '#771f85',
  },
  buttonDanger: {
    backgroundColor: '#9D2222',
  },
  buttonTextDefault: {
    color: '#fff',
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
  positionTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  positionRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
  },
  positionBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  closeButton: {
    color: '#fff',
    backgroundColor: '#000',
    marginRight: '5%',
    padding: 10,
    borderRadius: 17,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  modalHeader: {
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#00000033',
  },
  modalContent: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  modalContentItem: {
    padding: 10,
    margin: 5,
    fontSize: 18,
  },
  modalButton: {
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#00000033',
  },
  textBold: {
    fontSize: 20,
    fontFamily: font.type.bold,
  },
  textDefault: {
    fontSize: 14,
    fontFamily: font.type.secondary,
  },
  textDarkGray: {
    color: '#474747',
  },
  textDark: {
    color: '#000',
  },
  textMagical: {
    color: '#771f85',
  },
  textLight: {
    color: '#fff',
  },
  adaptiveContainerVertical: {
    height: (SCREEN_WIDTH * SCREEN_WIDTH) / SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  adaptiveContainerHorizontal: {height: SCREEN_HEIGHT, width: SCREEN_WIDTH},
  imageContainerVertical: {
    height: SCREEN_WIDTH,
    width: (SCREEN_WIDTH * SCREEN_WIDTH) / SCREEN_HEIGHT,
    transform: [
      {rotate: '-90deg'},
      {
        translateY:
          (SCREEN_WIDTH * ((SCREEN_HEIGHT - SCREEN_WIDTH) / SCREEN_HEIGHT)) / 2,
      },
      {
        translateX:
          (SCREEN_WIDTH * ((SCREEN_HEIGHT - SCREEN_WIDTH) / SCREEN_HEIGHT)) / 2,
      },
    ],
  },
  imageContainerHorizontal: {flex: 1, flexDirection: 'row'},
  image: {
    flex: 1,
    maxWidth: '100%',
  },
  roundedSmall: {
    borderRadius: 20,
  },
  paddingSmall: {
    padding: 15,
  },
  paddingHorizontalSmall: {
    paddingRight: 15,
  },
  backgroundMagical: {
    backgroundColor: '#771F85',
  },
  imagePlaceholder: {flex: 1, backgroundColor: '#f7f7f7'},
});
