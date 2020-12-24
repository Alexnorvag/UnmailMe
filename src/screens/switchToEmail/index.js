import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';

import {switchEmailSchema} from '../../validation';
import {viewStyles} from '../../styles';

export const SwitchToEmailScreen = ({route, navigation}) => {
  const switchToEmail = ({email}) => {
    navigation.navigate('Congrats', {
      screenType: route.params.screenType,
      email,
    });
  };

  return (
    <View style={viewStyles.container}>
      <View style={[viewStyles.centered, viewStyles.marginVerticalMedium]}>
        <Text style={viewStyles.titleBold}>Switch to Email</Text>
        <Text style={viewStyles.description}>
          Choose how you would like to proceed recieving unwanted mail clutter
          for the post office.
        </Text>
      </View>
      <View style={viewStyles.columnContainer}>
        <Formik
          initialValues={{email: ''}}
          validationSchema={switchEmailSchema}
          onSubmit={(values) => {
            console.log('values: ', values);
            switchToEmail({...values});
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={[viewStyles.columnContainer, viewStyles.spaceAround]}>
              <View style={viewStyles.paddingSmall}>
                <View style={viewStyles.flexRow}>
                  <TextInput
                    autoCapitalize="none"
                    placeholder="Email"
                    style={[viewStyles.input, viewStyles.fullWidth]}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                <Text style={viewStyles.errorValidationText}>
                  {touched.email && errors.email}
                </Text>
              </View>

              <TouchableOpacity
                style={[
                  viewStyles.button,
                  viewStyles.buttonMedium,
                  viewStyles.buttonMagical,
                ]}
                onPress={handleSubmit}>
                <Text
                  style={[viewStyles.buttonTextDefault, viewStyles.textBold]}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
