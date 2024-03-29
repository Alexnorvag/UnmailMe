import React, {useEffect, useReducer} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import {
  BackgroundIcon,
  UnmailUnsubscribeIcon,
  UnmailSwitchEmailIcon,
  UnmailWrongAddressIcon,
} from '../../assets/svg';
import {unsubscribe, switchToEmail, wrongAddress} from '../../services';
import {viewStyles} from '../../styles';

const initialCongratState = {
  renderImage: () => {},
  screenMessage: '',
  unmailHandler: () => {},
};

const congratsReducer = (state, action) => {
  switch (action.type) {
    case 'UNSUBSCRIBE':
      return {
        unmailHandler: unsubscribe,
        renderImage: () => (
          <View
            style={[
              viewStyles.container,
              viewStyles.flexRow,
              viewStyles.imageShiftLeftSmall,
            ]}>
            <UnmailUnsubscribeIcon />
          </View>
        ),
        message:
          "You've successfuly unsubscribed to recieving any more mail from this sender.",
      };
    case 'SWITCH_TO_EMAIL':
      return {
        unmailHandler: switchToEmail,
        renderImage: () => <UnmailSwitchEmailIcon />,
        message:
          'You successfuly switched to only recieving emails from this sender.',
      };
    case 'WRONG_ADDRESS':
      return {
        unmailHandler: wrongAddress,
        renderImage: () => <UnmailWrongAddressIcon />,
        message:
          'You have let the sender know they have been mailing to the wrong address.',
      };
    default:
      return {...state};
  }
};

export const CongratsScreen = ({route, navigation}) => {
  const [congratScreen, dispatch] = useReducer(
    congratsReducer,
    initialCongratState,
  );
  const {src} = useSelector((state) => state.camera);

  const navigateToCamera = () => {
    navigation.navigate('Camera');
  };

  useEffect(() => {
    const {screenType} = route.params;

    dispatch({type: screenType});
  }, [route.params]);

  useEffect(() => {
    const unmailing = async () => {
      const {email} = route.params;

      const unmailData = {
        image: src,
        ...(email && {email}),
      };

      await congratScreen.unmailHandler(unmailData);
    };

    if (congratScreen.unmailHandler) {
      unmailing();
    }
  }, [congratScreen, src, route.params]);

  return (
    <View style={[viewStyles.container]}>
      <View style={[viewStyles.imageContainer, viewStyles.flexThree]}>
        <View style={viewStyles.imageContainerBackground}>
          <BackgroundIcon />
        </View>
        {congratScreen.renderImage()}
      </View>
      <View style={[viewStyles.flexTwo, viewStyles.marginVerticalMedium]}>
        <View style={[viewStyles.container]}>
          <Text style={viewStyles.titleBold}>Congratulations</Text>
          <Text style={viewStyles.description}>{congratScreen.message}</Text>
        </View>

        <View style={viewStyles.columnContainer}>
          <View style={[viewStyles.container, viewStyles.flexRow]}>
            <TouchableOpacity
              style={[
                viewStyles.button,
                viewStyles.buttonMagical,
                viewStyles.buttonMedium,
              ]}
              onPress={navigateToCamera}>
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
