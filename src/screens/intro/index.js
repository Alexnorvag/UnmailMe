import React from 'react';
import {Text, View} from 'react-native';
import ScreenSlider from 'react-native-app-intro-slider';

import {viewStyles} from '../../styles';
import {IntroGettingStartedIcon, IntroTakePhotoIcon} from '../../assets/svg';

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
      <View style={{marginVertical: 30}}>
        <IntroTakePhotoIcon />
      </View>
    ),
  },
];

export const IntroScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 30,
          }}>
          {item.image()}
        </View>
        <View style={{marginTop: 30}}>
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
          viewStyles.buttonMagical,
          viewStyles.marginVerticalMedium,
        ]}>
        <Text style={viewStyles.buttonTextDefault}>{title}</Text>
      </View>
    );
  };

  return (
    <ScreenSlider
      data={slides}
      dotStyle={{backgroundColor: '#C4C4C4'}}
      activeDotStyle={{backgroundColor: '#B538CA'}}
      renderItem={renderItem}
      renderNextButton={() => renderButton('Skip')}
      renderDoneButton={() => renderButton('Take Photo')}
      onDone={() => navigation.navigate('Home')}
      bottomButton={true}
    />
  );
};
