import {StyleSheet} from 'react-native';

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    fontSize: 18,
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
    fontWeight: '700',
  },
  titleBold: {
    fontWeight: '700',
    fontSize: 27,
    textAlign: 'center',
    paddingHorizontal: '15%',
  },
  description: {
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: '15%',
    paddingVertical: '5%',
  },
  marginVerticalMedium: {
    marginTop: 20,
    marginBottom: 10,
  },
});
