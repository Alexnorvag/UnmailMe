import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ImageView} from '../../components';
import {deletePhoto} from '../../features/camera/cameraSlice';
import {viewStyles} from '../../styles';

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
        style={[viewStyles.positionRight, viewStyles.paddingHorizontalSmall]}
        onPress={deletePreviewPhoto}>
        <Icon name="close" size={14} style={viewStyles.closeButton} />
      </TouchableOpacity>
    );
  };

  const unmailOptions = [
    {
      title: 'Unsubscribe',
      text: 'You won’t recieve this unwanted mail.',
      icon: 'mail-outline',
      iconStyles: [
        {
          backgroundColor: 'rgba(211, 40, 40, 0.2)',
          color: '#D32828',
          padding: 10,
          borderRadius: 12,
        },
      ],
    },
    {
      title: 'Switch to Email',
      text: 'Go paperless by recieving email instead.',
      icon: 'airplanemode-active',
      iconStyles: [
        {
          backgroundColor: 'rgba(32, 169, 91, 0.2)',
          color: '#20A95B',
          padding: 10,
          borderRadius: 12,
        },
      ],
    },
    {
      title: 'Wrong Address',
      text: 'Let sender know your updated address.',
      icon: 'wrong-location',
      iconStyles: [
        {
          backgroundColor: 'rgba(40, 89, 162, 0.2)',
          color: '#2859A1',
          padding: 10,
          borderRadius: 12,
        },
      ],
    },
  ];

  const renderUnmailMenuItem = (item) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          // backgroundColor: 'red',
          borderRadius: 16,
          // overflow: 'hidden',
          marginVertical: 5,
          padding: 15,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row' /* , backgroundColor: 'red' */,
          }}>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: 'white',
            }}>
            <Icon name={item.icon} size={28} style={item.iconStyles} />
          </View>
          <View
            style={{
              flex: 6,
              justifyContent: 'center',
              // backgroundColor: 'white',
            }}>
            <Text
              style={[/* {backgroundColor: 'orange'}, */ viewStyles.textBold]}>
              {item.title}
            </Text>
            <Text
              style={[
                // {backgroundColor: 'silver'},
                viewStyles.textDefault,
                viewStyles.textDarkGray,
              ]}>
              {item.text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[viewStyles.container, viewStyles.backgroundMagical]}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
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
          style={{
            flex: 1,
            backgroundColor: 'white',
            overflow: 'hidden',
            paddingHorizontal: 10,
            paddingTop: 15,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View
            style={{
              flex: 1,
              // backgroundColor: 'black',
              padding: 10,
            }}>
            {unmailOptions.map((option, index) => (
              <React.Fragment key={index}>
                {renderUnmailMenuItem(option)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
