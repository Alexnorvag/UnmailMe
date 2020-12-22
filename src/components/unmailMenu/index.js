import React, {useState, useReducer} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Pressable, View, Text, TouchableOpacity} from 'react-native';

import {ModalWindow} from '../modal';
import {unmailStyles, viewStyles} from '../../styles';

const initialUnmailState = {
  text: '',
  title: '',
  screenName: '',
  screenType: '',
};

const unmailReducer = (state, action) => {
  switch (action.type) {
    case 'UNSUBSCRIBE':
      console.log('unsubscribe from this sender');
      return {
        title: 'Are you sure you want to unsubscribe to this sender?',
        message: "You don't receive mails from this sender anymore.",
        screenName: 'Congrats',
        screenType: action.type,
      };
    case 'SWITCH_TO_EMAIL':
      console.log('switch to email this sender');
      return {
        title: 'Are you sure that you want switch to email?',
        message: 'Your mail will be forwarded to your email.',
        screenName: 'SwitchToEmail',
        screenType: action.type,
      };
    case 'WRONG_ADDRESS':
      console.log('not you address');
      return {
        title: 'Are you sure this mail is not for you?',
        message: "You won't receive mails from this sender anymore.",
        screenName: 'Congrats',
        screenType: action.type,
      };
    default:
      return {...state};
  }
};

export const UnmailMenu = ({navigation}) => {
  const [unmailOption, dispatch] = useReducer(
    unmailReducer,
    initialUnmailState,
  );
  const [modalVisibility, setModalVisibility] = useState(false);

  const unmailOptions = [
    {
      title: 'Unsubscribe',
      text: 'You won’t recieve this unwanted mail.',
      icon: 'mail-outline',
      iconStyles: [unmailStyles.iconContainer, unmailStyles.iconDanger],
      actionName: 'UNSUBSCRIBE',
    },
    {
      title: 'Switch to Email',
      text: 'Go paperless by recieving email instead.',
      icon: 'airplanemode-active',
      iconStyles: [unmailStyles.iconContainer, unmailStyles.iconFresh],
      actionName: 'SWITCH_TO_EMAIL',
    },
    {
      title: 'Wrong Address',
      text: 'Let sender know your updated address.',
      icon: 'wrong-location',
      iconStyles: [unmailStyles.iconContainer, unmailStyles.iconSky],
      actionName: 'WRONG_ADDRESS',
    },
  ];

  const modalToggle = () => {
    setModalVisibility((v) => !v);
  };

  const unmailHandler = (actionName) => {
    dispatch({type: actionName});

    modalToggle();
  };

  const confirmUnmailing = () => {
    modalToggle();

    navigation.navigate(unmailOption.screenName, {
      screenType: unmailOption.screenType,
    });
  };

  const renderModalContent = () => {
    return (
      <View style={[viewStyles.paddingLargeReverse]}>
        <Text style={[viewStyles.textMedium, viewStyles.textCenterX]}>
          {unmailOption.title}
        </Text>
        <Text
          style={[
            viewStyles.textDefault,
            viewStyles.textCenterX,
            viewStyles.marginTopSmall,
          ]}>
          {unmailOption.message}
        </Text>
      </View>
    );
  };

  const renderModalFooter = () => {
    return (
      <View style={[viewStyles.flexRow, viewStyles.dividerTop]}>
        <TouchableOpacity
          style={[
            viewStyles.columnContainer,
            viewStyles.modalButton,
            viewStyles.dividerRight,
          ]}
          onPress={modalToggle}>
          <Text style={[viewStyles.textBold, viewStyles.textMagical]}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[viewStyles.columnContainer, viewStyles.modalButton]}
          onPress={confirmUnmailing}>
          <Text style={[viewStyles.textBold, viewStyles.textMagical]}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={[
        unmailStyles.menuContainer,
        viewStyles.roundedTopMedium,
        viewStyles.paddingMedium,
        viewStyles.backgroundLight,
      ]}>
      {unmailOptions.map((option, index) => (
        <Pressable
          key={index}
          onPress={() => unmailHandler(option.actionName)}
          style={({pressed}) => [
            unmailStyles.menuContainer,
            unmailStyles.smallIndents,
            viewStyles.backgroundLight,
            viewStyles.roundedSmall,
            pressed && viewStyles.boxShadowMedium,
          ]}>
          <View style={viewStyles.rowContainer}>
            <View style={unmailStyles.menuItemIcon}>
              <Icon name={option.icon} size={28} style={option.iconStyles} />
            </View>
            <View style={unmailStyles.menuItemDescription}>
              <Text style={viewStyles.textBold}>{option.title}</Text>
              <Text style={[viewStyles.textDefault, viewStyles.textDarkGray]}>
                {option.text}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}

      <ModalWindow
        visible={modalVisibility}
        onVisibilityChange={modalToggle}
        renderContent={renderModalContent}
        renderFooter={renderModalFooter}
      />
    </View>
  );
};
