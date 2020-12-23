import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import {loginSchema} from '../../validation';
import {login} from '../../features/signin/signinSlice';
import {BackgroundIcon} from '../../assets/svg';
import font from '../../themes/fonts';
import {viewStyles} from '../../styles';

export const LoginScreen = () => {
  const [isSecure, setIsSecure] = useState(true);

  const inputElementRef = useRef({});

  const dispatch = useDispatch();

  const changePasswordVisibility = () => {
    setIsSecure((s) => !s);
  };

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: {
        fontFamily: font.type.secondary,
      },
    });
  }, [isSecure]);

  return (
    <View style={viewStyles.container}>
      <View style={[viewStyles.rowContainer, viewStyles.paddingMedium]}>
        <View style={[viewStyles.imageContainerBackground]}>
          <BackgroundIcon />
        </View>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            dispatch(login(values));
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={[viewStyles.columnContainer, viewStyles.fullWidth]}>
              <View
                style={[viewStyles.columnContainer, viewStyles.spaceEvenly]}>
                <View>
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
                  </View>
                  <View>
                    <View>
                      <TextInput
                        ref={inputElementRef}
                        autoCapitalize="none"
                        placeholder="Password"
                        style={viewStyles.input}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={isSecure}
                      />
                      <TouchableOpacity
                        onPress={changePasswordVisibility}
                        style={[viewStyles.positionRight, viewStyles.centered]}>
                        <Icon
                          name={isSecure ? 'eye' : 'eye-slash'}
                          size={24}
                          color="#000"
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={viewStyles.errorValidationText}>
                      {touched.password && errors.password}
                    </Text>
                  </View>
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
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
