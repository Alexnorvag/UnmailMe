import React, {useMemo, useRef, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import {useDispatch} from 'react-redux';

import {createPhoto} from '../../features/camera/cameraSlice';
import {Camera, Preview, CameraControls, ModalWindow} from '../../components';
import {viewStyles} from '../../styles';

export const CameraScreen = ({navigation}) => {
  const [isFlashOn, setIsFlashOn] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const dispatch = useDispatch();

  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 0.5,
        base64: true,
      };
      const data = await cameraRef.current.takePictureAsync(options);

      setImgSrc(data.uri);
    }
  };

  const cancelPhoto = () => setImgSrc('');
  const confirmPhoto = () => dispatch(createPhoto(imgSrc));
  const flashHandler = () => setIsFlashOn((s) => !s);
  const modalHandler = () => setIsModalVisible((v) => !v);

  const controls = useMemo(
    () =>
      imgSrc
        ? [
            {
              text: 'Try Again',
              styles: [viewStyles.buttonDanger],
              handler: cancelPhoto,
            },
            {
              text: 'Confirm',
              styles: [viewStyles.buttonMagical],
              handler: confirmPhoto,
            },
          ]
        : [
            {
              text: 'Take Photo',
              styles: [viewStyles.buttonMagical],
              handler: takePicture,
            },
          ],
    [imgSrc],
  );

  const renderButtons = (buttons) => {
    return (
      <>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={button.handler}
            style={[
              viewStyles.button,
              viewStyles.buttonSmall,
              ...button.styles,
            ]}>
            <Text style={viewStyles.buttonTextDefault}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      {imgSrc ? (
        <Preview imgSrc={imgSrc} />
      ) : (
        <Camera forwardedRef={cameraRef} flashMode={isFlashOn} />
      )}

      <BarcodeMask
        width={'70%'}
        height={'70%'}
        edgeColor={'#1E1E1E'}
        edgeBorderWidth={4}
        edgeWidth={70}
        edgeHeight={70}
        backgroundColor={'#000000'}
        showAnimatedLine={false}
        outerMaskOpacity={0.4}
      />

      <CameraControls
        navigation={navigation}
        flashHandler={flashHandler}
        infoHandler={modalHandler}
        flashMode={isFlashOn}
        renderButtons={() => renderButtons(controls)}
      />

      <ModalWindow visible={isModalVisible} onVisibilityChange={modalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});
