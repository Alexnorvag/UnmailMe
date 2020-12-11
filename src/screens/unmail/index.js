import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {viewStyles} from '../../styles';

export const UnmailScreen = () => {
  const {src} = useSelector((state) => state.camera);

  useEffect(() => {
    console.log('mail photo: ', src);
  }, [src]);

  return (
    <View style={{backgroundColor: '#771F85', flex: 1}}>
      <Text style={viewStyles.titleBold}>Almost done</Text>
      <Text style={viewStyles.description}>
        How you would like to proceed recieving unwanted mail clutter for the
        post office.
      </Text>
    </View>
  );
};
