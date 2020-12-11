import React from 'react';
import {RNCamera} from 'react-native-camera';

import {cameraStyles} from '../../styles';

export const Camera = ({forwardedRef, flashMode}) => {
  return (
    <RNCamera
      ref={forwardedRef}
      style={cameraStyles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={
        flashMode
          ? RNCamera.Constants.FlashMode.on
          : RNCamera.Constants.FlashMode.off
      }
      captureAudio={false}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
    />
  );
};
