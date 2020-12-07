import React from 'react';
import {ImageBackground} from 'react-native';

import {viewStyles} from '../../styles';

export const Preview = ({imgSrc}) => {
  return (
    <ImageBackground
      source={{uri: imgSrc}}
      style={viewStyles.backgroundImage}
    />
  );
};
