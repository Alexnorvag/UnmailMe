import React, {useMemo, useRef, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import {useDispatch} from 'react-redux';

import {createPhoto} from '../../features/camera/cameraSlice';
import {Camera, Preview, CameraControls, ModalWindow} from '../../components';
import {viewStyles, cameraStyles} from '../../styles';

export const CameraScreen = ({navigation}) => {
  const [isFlashOn, setIsFlashOn] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const dispatch = useDispatch();

  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
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
            <Text style={[viewStyles.buttonTextDefault, viewStyles.textBold]}>
              {button.text}
            </Text>
          </TouchableOpacity>
        ))}
      </>
    );
  };

  const renderModalHeader = () => {
    return (
      <View style={viewStyles.modalHeader}>
        <Text style={[viewStyles.textBold, viewStyles.textDefault]}>
          Instructions
        </Text>
      </View>
    );
  };

  const renderModalContent = () => {
    const cameraInstructions = [
      'Place the mail into the frame.',
      "Click 'Take Photo' to take a photo of your mail.",
      "Click 'Confirm' to get next steps.",
      "Click 'Try Againg' if you failed with photo.",
      'Click on the flashlight icon to activate it.',
    ];

    return (
      <View style={viewStyles.modalContent}>
        {cameraInstructions.map((instruction, index) => (
          <Text key={index} style={viewStyles.modalContentItem}>
            {`${index + 1}) ${instruction}`}
          </Text>
        ))}
      </View>
    );
  };

  const renderModalFooter = () => {
    return (
      <TouchableOpacity style={viewStyles.modalButton} onPress={modalHandler}>
        <Text style={[viewStyles.textBold, viewStyles.textMagical]}>
          Confirm
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={cameraStyles.container}>
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

      <ModalWindow
        visible={isModalVisible}
        onVisibilityChange={modalHandler}
        renderHeader={renderModalHeader}
        renderContent={renderModalContent}
        renderFooter={renderModalFooter}
      />
    </View>
  );
};
