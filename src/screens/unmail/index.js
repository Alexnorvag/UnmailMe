import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ImageView} from '../../components';
import {deletePhoto} from '../../features/camera/cameraSlice';
import {unmailStyles, viewStyles} from '../../styles';

const unmailOptions = [
  {
    title: 'Unsubscribe',
    text: 'You won’t recieve this unwanted mail.',
    icon: 'mail-outline',
    iconStyles: [unmailStyles.iconContainer, unmailStyles.iconDanger],
  },
  {
    title: 'Switch to Email',
    text: 'Go paperless by recieving email instead.',
    icon: 'airplanemode-active',
    iconStyles: [unmailStyles.iconContainer, unmailStyles.iconFresh],
  },
  {
    title: 'Wrong Address',
    text: 'Let sender know your updated address.',
    icon: 'wrong-location',
    iconStyles: [unmailStyles.iconContainer, unmailStyles.iconSky],
  },
];

export const UnmailScreen = ({navigation}) => {
  const {src} = useSelector((state) => state.camera);

  const dispatch = useDispatch();

  const deletePreviewPhoto = () => {
    dispatch(deletePhoto());
    navigation.navigate('Camera');
  };

  // const openPhotoPreview = () => {
  //   navigation.navigate('Camera');
  // };

  const renderImageControls = () => {
    return (
      <TouchableOpacity
        style={[viewStyles.paddingHorizontalSmall, viewStyles.positionTopRight]}
        onPress={deletePreviewPhoto}>
        <Icon name="close" size={14} style={viewStyles.closeButton} />
      </TouchableOpacity>
    );
  };

  const renderUnmailMenuItem = (item) => {
    return (
      <Pressable
        onPress={() => console.log('selected: ', item.title)}
        style={({pressed}) => [
          unmailStyles.menuContainer,
          unmailStyles.smallIndents,
          viewStyles.backgroundLight,
          viewStyles.roundedSmall,
          pressed && viewStyles.boxShadowMedium,
        ]}>
        <View style={viewStyles.rowContainer}>
          <View style={unmailStyles.menuItemIcon}>
            <Icon name={item.icon} size={28} style={item.iconStyles} />
          </View>
          <View style={unmailStyles.menuItemDescription}>
            <Text style={viewStyles.textBold}>{item.title}</Text>
            <Text style={[viewStyles.textDefault, viewStyles.textDarkGray]}>
              {item.text}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={[viewStyles.container, viewStyles.backgroundMagical]}>
      <ScrollView contentContainerStyle={unmailStyles.scrollContainer}>
        <View>
          <Text style={[viewStyles.titleBold, viewStyles.textLight]}>
            Almost done
          </Text>
          <Text style={[viewStyles.description, viewStyles.textLight]}>
            How you would like to proceed recieving unwanted mail clutter for
            the post office.
          </Text>

          <ImageView
            imgSrc={src}
            renderControls={renderImageControls}
            // imageHandler={openPhotoPreview}
          />
        </View>

        <View
          style={[
            unmailStyles.menuContainer,
            viewStyles.roundedTopMedium,
            viewStyles.paddingMedium,
            viewStyles.backgroundLight,
          ]}>
          {unmailOptions.map((option, index) => (
            <React.Fragment key={index}>
              {renderUnmailMenuItem(option)}
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
