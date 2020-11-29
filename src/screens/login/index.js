import React from 'react';
import {
  Text,
//   TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
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
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  <TextInput
                    autoCapitalize="none"
                    placeholder="Password"
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
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
