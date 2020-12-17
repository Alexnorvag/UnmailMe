import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const UnsubscribeScreen = () => {
  return (
    <View>
      <Text>Congratulations</Text>
      <Text>
        You’ve successfuly unsubscribed to recieving any more mail from this
        sender.
      </Text>
      <TouchableOpacity>
        <Text>Take Another Photo</Text>
      </TouchableOpacity>
    </View>
  );
};
