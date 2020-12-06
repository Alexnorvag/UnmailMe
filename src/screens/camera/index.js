import React, {useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {HeaderMenu} from '../../components';
import {navigationStyles, viewStyles} from '../../styles';

export const CameraScreen = () => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('snap uir: ', data.uri);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />

      <View style={styles.absoluteContainer}>
        <View style={[styles.menu]}>
          <HeaderMenu
            styles={[
              navigationStyles.headerMenu,
              {marginTop: getStatusBarHeight(true) + 10, width: 43},
            ]}
          />
        </View>
        <View style={styles.frame}>

        </View>
        <View style={styles.cameraControls}>
          <TouchableOpacity
            onPress={takePicture}
            style={[viewStyles.button, viewStyles.buttonMagical]}>
            <Text style={viewStyles.buttonTextDefault}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  absoluteContainer: {
    position: 'absolute',
    backgroundColor: '#ffffff88',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  frame: {
    flex: 4
  },    
  menu: {
    // backgroundColor: 'red',
  },
  cameraControls: {
    flex: 2,
    // backgroundColor: 'violet',
    justifyContent: 'center',
  },
});
