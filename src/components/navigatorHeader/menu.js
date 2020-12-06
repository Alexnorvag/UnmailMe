import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu, {MenuItem} from 'react-native-material-menu';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import {logout} from '../../features/signin/signinSlice';

export const HeaderMenu = ({styles}) => {
  const dispatch = useDispatch();

  const menuRef = useRef(null);

  const showMenu = () => {
    menuRef.current.show();
  };

  const hideMenu = () => {
    menuRef.current.hide();
  };

  const signout = () => {
    hideMenu();
    dispatch(logout());
  };

  return (
    <View>
      <Menu
        animationDuration={50}
        button={
          <Icon onPress={showMenu} name="menu" size={22} style={styles} />
        }
        ref={menuRef}>
        <MenuItem onPress={signout}>Sign out</MenuItem>
      </Menu>
    </View>
  );
};
