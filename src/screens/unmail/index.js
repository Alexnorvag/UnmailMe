import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {ImageView} from '../../components';
import {viewStyles} from '../../styles';

export const UnmailScreen = () => {
  const {src} = useSelector((state) => state.camera);

  return (
    <View style={{flex: 1, backgroundColor: '#771F85'}}>
      <ScrollView>
        <Text style={[viewStyles.titleBold, viewStyles.textLight]}>
          Almost done
        </Text>
        <Text style={[viewStyles.description, viewStyles.textLight]}>
          How you would like to proceed recieving unwanted mail clutter for the
          post office.
        </Text>

        <ImageView imgSrc={src} />
      </ScrollView>
    </View>
  );
};
