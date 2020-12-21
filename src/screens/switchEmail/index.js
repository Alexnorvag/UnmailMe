import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {BackgroundIcon, UnmailSwitchEmailIcon} from '../../assets/svg';
import {viewStyles} from '../../styles';

export const SwitchEmailScreen = () => {
  return (
    <View style={[viewStyles.container]}>
      <View style={[viewStyles.imageContainer, viewStyles.flexThree]}>
        <View style={viewStyles.imageContainerBackground}>
          <BackgroundIcon />
        </View>
        <UnmailSwitchEmailIcon />
      </View>
      <View style={[viewStyles.flexTwo, viewStyles.marginVerticalMedium]}>
        <View style={[viewStyles.container]}>
          <Text style={viewStyles.titleBold}>Congratulations</Text>
          <Text style={viewStyles.description}>
            You successfuly switched to only recieving emails from this sender.
          </Text>
        </View>

        <View style={viewStyles.columnContainer}>
          <View style={[viewStyles.container, viewStyles.flexRow]}>
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
        </View>
      </View>
    </View>
  );
};
