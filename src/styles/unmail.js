import {StyleSheet} from 'react-native';

export const unmailStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  menuContainer: {
    flex: 0,
  },
  menuItemIcon: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  menuItemDescription: {
    flex: 8,
    justifyContent: 'space-evenly',
  },
  smallIndents: {
    marginVertical: 5,
    paddingVertical: 15,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  iconDanger: {
    backgroundColor: 'rgba(211, 40, 40, 0.2)',
    color: '#D32828',
  },
  iconFresh: {
    backgroundColor: 'rgba(32, 169, 91, 0.2)',
    color: '#20A95B',
  },
  iconSky: {
    backgroundColor: 'rgba(40, 89, 162, 0.2)',
    color: '#2859A1',
  },

});
