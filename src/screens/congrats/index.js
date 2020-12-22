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
  renderImage: () => null,
  screenMessage: '',
  // unmailHandler: () => {},
};

const congratsReducer = (state, action) => {
  switch (action.type) {
    case 'UNSUBSCRIBE':
      unsubscribe(action.payload);
      return {
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
      switchToEmail(action.payload);
      return {
        renderImage: () => <UnmailSwitchEmailIcon />,
        message:
          'You successfuly switched to only recieving emails from this sender.',
      };
    case 'WRONG_ADDRESS':
      wrongAddress(action.payload);
      return {
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
    const {email, screenType} = route.params;
    const payload = email
      ? {
          image: src,
          email,
        }
      : {image: src};

    dispatch({type: screenType, payload});
  }, [src, route.params]);

  // useEffect(() => {
  //   const fetchSmhtg = async () => {
  //     // const {email} = route.params;
  //     await unsubscribe({image: src});
  //     // console.log('src: ', src);
  //     // console.log('email: ', email);
  //     // await congratScreen.unmailHandler({image: src, email});
  //   };

  //   fetchSmhtg();
  // }, [src, route.params]);

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
