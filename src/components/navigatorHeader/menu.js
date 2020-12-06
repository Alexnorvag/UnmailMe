import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu, {MenuItem} from 'react-native-material-menu';
import {View} from 'react-native';

export const HeaderMenu = ({styles}) => {
  const menuRef = useRef(null);

  const showMenu = () => {
    menuRef.current.show();
  };

  const hideMenu = () => {
    menuRef.current.hide();
  };

  const signout = () => {
    hideMenu();
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
