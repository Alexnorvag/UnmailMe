import React, {useMemo} from 'react';
import {Image, View} from 'react-native';

import {isPortrait, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants';

export const ImageView = ({imgSrc}) => {
  const width = SCREEN_WIDTH;
  const height = SCREEN_HEIGHT;
  //   const width = useMemo(() => (isPortrait ? SCREEN_WIDTH : SCREEN_HEIGHT), [
  //     isPortrait,
  //   ]);

  //   const height = useMemo(() => (isPortrait ? SCREEN_HEIGHT : SCREEN_WIDTH), [
  //     isPortrait,
  //   ]);

  console.log('SCREEN_HEIGHT: ', SCREEN_HEIGHT);
  console.log('SCREEN_WIDTH: ', SCREEN_WIDTH);
  console.log('height: ', height);
  console.log('width: ', width);
  return (
    <View
      style={{
        height: (width * width) / height,
        width: width,
        marginTop: 10,
      }}>
      <View
        style={{
          padding: 15,
          width: (width * width) / height,
          height: width,
          backgroundColor: 'blue',
          transform: [
            {rotate: '-90deg'},
            {
              translateY: (width * ((height - width) / height)) / 2,
            },
            {
              translateX: (width * ((height - width) / height)) / 2,
            },
          ],
        }}>
        <Image
          style={{
            flex: 1,
            maxWidth: '100%',
            borderRadius: 20,
          }}
          source={{
            uri: imgSrc,
          }}
        />
      </View>
    </View>
  );
};
