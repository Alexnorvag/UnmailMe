import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ImageView, UnmailMenu} from '../../components';
import {deletePhoto} from '../../features/camera/cameraSlice';
import {unmailStyles, viewStyles} from '../../styles';

export const UnmailScreen = ({navigation}) => {
  const {src} = useSelector((state) => state.camera);

  const dispatch = useDispatch();

  const deletePreviewPhoto = () => {
    dispatch(deletePhoto());
    navigation.navigate('Camera');
  };

  const openImagePreview = () => {
    navigation.navigate('Camera', {
      unmailSrc: src,
    });
  };

  const renderImageControls = () => {
    return (
      <TouchableOpacity
        style={[viewStyles.paddingHorizontalSmall, viewStyles.positionTopRight]}
        onPress={deletePreviewPhoto}>
        <Icon name="close" size={14} style={viewStyles.closeButton} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[viewStyles.container, viewStyles.backgroundMagical]}>
      <ScrollView contentContainerStyle={unmailStyles.scrollContainer}>
        <View style={viewStyles.container}>
          <Text style={[viewStyles.titleBold, viewStyles.textLight]}>
            Almost done
          </Text>
          <Text style={[viewStyles.description, viewStyles.textLight]}>
            How you would like to proceed recieving unwanted mail clutter for
            the post office.
          </Text>
        </View>

        <ImageView
          imgSrc={src}
          renderControls={renderImageControls}
          imageHandler={openImagePreview}
        />

        <UnmailMenu navigation={navigation} />
      </ScrollView>
    </View>
  );
};
