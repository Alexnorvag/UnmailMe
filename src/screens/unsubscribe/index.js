import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {viewStyles} from '../../styles';

export const UnsubscribeScreen = () => {
  return (
    <View>
      <Text>Congratulations</Text>
      <Text>
        You’ve successfuly unsubscribed to recieving any more mail from this
        sender.
      </Text>
      <TouchableOpacity
        style={[
          viewStyles.button,
          viewStyles.buttonMagical,
          viewStyles.buttonMedium,
        ]}>
        <Text style={[viewStyles.textBold, viewStyles.textLight]}>
          Take Another Photo
        </Text>
      </TouchableOpacity>
    </View>
  );
};
