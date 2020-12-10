import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {isPortrait, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants';
import {viewStyles} from '../../styles';

export const ImageView = ({imgSrc}) => {
  const width = SCREEN_WIDTH;
  const height = SCREEN_HEIGHT;

  console.log('SCREEN_HEIGHT: ', SCREEN_HEIGHT);
  console.log('SCREEN_WIDTH: ', SCREEN_WIDTH);
  console.log('height: ', height);
  console.log('width: ', width);

  return (
    <View
      style={[
        isPortrait
          ? styles.adaptiveContainerVertical
          : styles.adaptiveContainerHorizontal,
        viewStyles.marginVerticalMedium,
      ]}>
      <View
        style={[
          isPortrait
            ? styles.imageContainerVertical
            : styles.imageContainerHorizontal,
          styles.paddingSmall,
        ]}>
        <Image
          style={[styles.image, styles.roundedSmall]}
          source={{
            uri: imgSrc,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  adaptiveContainerVertical: {
    height: (SCREEN_WIDTH * SCREEN_WIDTH) / SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  adaptiveContainerHorizontal: {height: SCREEN_HEIGHT, width: SCREEN_WIDTH},
  imageContainerVertical: {
    height: SCREEN_WIDTH,
    width: (SCREEN_WIDTH * SCREEN_WIDTH) / SCREEN_HEIGHT,
    transform: [
      {rotate: '-90deg'},
      {
        translateY:
          (SCREEN_WIDTH * ((SCREEN_HEIGHT - SCREEN_WIDTH) / SCREEN_HEIGHT)) / 2,
      },
      {
        translateX:
          (SCREEN_WIDTH * ((SCREEN_HEIGHT - SCREEN_WIDTH) / SCREEN_HEIGHT)) / 2,
      },
    ],
  },
  imageContainerHorizontal: {flex: 1, flexDirection: 'row'},
  image: {
    flex: 1,
    maxWidth: '100%',
  },
  roundedSmall: {
    borderRadius: 20,
  },
  paddingSmall: {
    padding: 15,
  },
});
