import React from 'react';
import {Text, View} from 'react-native';
import ScreenSlider from 'react-native-app-intro-slider';

import {
  IntroGettingStartedIcon,
  IntroTakePhotoIcon,
  BackgroundIcon,
} from '../../assets/svg';
import {viewStyles, introStyles} from '../../styles';

const slides = [
  {
    key: 'one',
    title: 'Getting Started',
    text:
      'Getting tired of that unwanted mail you recieve everyday? Well now you can opt-out of it.',
    image: () => <IntroGettingStartedIcon />,
  },
  {
    key: 'two',
    title: 'Take a Photo',
    text:
      'Take a photo and unsubscribe to those nuisance mailers you get everyday.',

    image: () => (
      <View
        style={[viewStyles.imageContainer, introStyles.imageIndentContainer]}>
        <IntroTakePhotoIcon />
      </View>
    ),
  },
];

export const IntroScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={[introStyles.container]}>
        <View style={[viewStyles.imageContainer, introStyles.imageContainer]}>
          <View style={viewStyles.imageContainerBackground}>
            <BackgroundIcon />
          </View>
          {item.image()}
        </View>
        <View style={introStyles.contentWrapper}>
          <Text style={viewStyles.titleBold}>{item.title}</Text>
          <Text style={viewStyles.description}>{item.text}</Text>
        </View>
      </View>
    );
  };
  const renderButton = (title) => {
    return (
      <View
        style={[
          viewStyles.button,
          viewStyles.buttonMedium,
          viewStyles.buttonMagical,
          viewStyles.marginVerticalSmall,
        ]}>
        <Text style={[viewStyles.buttonTextDefault, viewStyles.textBold]}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <ScreenSlider
      data={slides}
      dotStyle={introStyles.dotStyle}
      activeDotStyle={introStyles.activeDotStyle}
      renderItem={renderItem}
      renderNextButton={() => renderButton('Skip')}
      renderDoneButton={() => renderButton('Take Photo')}
      onDone={() => navigation.navigate('Camera')}
      bottomButton={true}
    />
  );
};
