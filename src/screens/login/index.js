import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {Formik} from 'formik';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {viewStyles} from '../../styles';
import {loginSchema} from '../../validation';

export const LoginScreen = ({navigation}) => {
  return (
    <View style={viewStyles.container}>
      <View style={styles.loginContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log('values: ', values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={{flex: 1, width: '100%'}}>
              <View style={{flex: 1, justifyContent: 'space-evenly'}}>
                <View>
                  <TextInput
                    autoCapitalize="none"
                    placeholder="Email"
                    style={viewStyles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  <Text style={viewStyles.errorValidationText}>
                    {touched.email && errors.email}
                  </Text>
                  <TextInput
                    autoCapitalize="none"
                    placeholder="Password"
                    style={viewStyles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  <Text style={viewStyles.errorValidationText}>
                    {touched.password && errors.password}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleSubmit}>
                  <Text style={styles.submitButtonTitle}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: getStatusBarHeight(),
  },
  submitButton: {
    backgroundColor: '#771f85',
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
  },
  submitButtonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});
