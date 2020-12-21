import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';

import {viewStyles} from '../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const SwitchToEmailScreen = () => {
  return (
    <View style={viewStyles.container}>
      <View style={[{flex: 0, backgroundColor: 'red'}, viewStyles.centered]}>
        <Text style={viewStyles.titleBold}>Switch to Email</Text>
        <Text style={viewStyles.description}>
          Choose how you would like to proceed recieving unwanted mail clutter
          for the post office.
        </Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <Formik
          initialValues={{email: ''}}
          // validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log('values: ', values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            // errors,
            // touched,
          }) => (
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'violet',
                }}>
                <TextInput
                  autoCapitalize="none"
                  placeholder="Email"
                  style={[viewStyles.input, {width: '100%'}]}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {/* <Text style={viewStyles.errorValidationText}>
                  {touched.email && errors.email}
                </Text> */}
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
