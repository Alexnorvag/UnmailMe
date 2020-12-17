import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';

import {isPortrait} from '../../constants';
import {viewStyles} from '../../styles';

export const ImageView = ({imgSrc, renderControls, imageHandler}) => {
  return (
    <View
      style={[
        viewStyles.columnContainer,
        viewStyles.marginVerticalSmall,
        isPortrait
          ? viewStyles.adaptiveContainerVertical
          : viewStyles.adaptiveContainerHorizontal,
      ]}>
      <TouchableOpacity
        onPress={imageHandler}
        style={[
          isPortrait
            ? viewStyles.imageContainerVertical
            : viewStyles.imageContainerHorizontal,
          viewStyles.paddingSmall,
        ]}>
        {imgSrc ? (
          <Image
            style={[viewStyles.image, viewStyles.roundedSmall]}
            source={{
              uri: imgSrc,
            }}
          />
        ) : (
          <View
            style={[viewStyles.imagePlaceholder, viewStyles.roundedSmall]}
          />
        )}
      </TouchableOpacity>
      {renderControls()}
    </View>
  );
};
