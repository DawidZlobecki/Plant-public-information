import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Formik, FormikProps} from 'formik';
import * as yup from 'yup';
import Input from '../atoms/Input';
import Colors from '../../styles/colors';
import Button from '../atoms/Button';
import i18n from '../../i18n';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {UnauthenticatedStackParamList} from '../../navigation/UnauthenticatedStack';

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(i18n.t('errors.emailInvalid'))
    .required(i18n.t('errors.emailRequired')),
  password: yup.string().required(i18n.t('errors.passwordRequired')),
});

const LoginForm: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<UnauthenticatedStackParamList>>();

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={[s.formWrapper]}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={(values: FormValues) => {
          // Obsługa formularza
        }}>
        {(formikProps: FormikProps<FormValues>) => (
          <View style={s.formContainer}>
            <Input
              label={i18n.t('loginScreen.email')}
              formikProps={formikProps}
              formikKey="email"
              placeholder={i18n.t('loginScreen.insertEmail')}
              error={formikProps.touched.email && formikProps.errors.email}
              icon={require('../../assets/icons/mail.png')}
            />
            <Input
              label={i18n.t('loginScreen.password')}
              formikProps={formikProps}
              formikKey="password"
              placeholder={i18n.t('loginScreen.insertPassword')}
              secureTextEntry
              error={
                formikProps.touched.password && formikProps.errors.password
              }
              icon={require('../../assets/icons/key.png')}
            />
            <Button
              buttonStyles={{marginHorizontal: 20}}
              title={i18n.t('loginScreen.login')}
              onPress={formikProps.handleSubmit}
            />

            <TouchableOpacity
              onPress={handleNavigateToRegister}
              activeOpacity={1}>
              <Text style={[s.registerQuestion]}>
                {i18n.t('loginScreen.dontHaveAnAccount')}
              </Text>
              <Text style={[s.signUpText]}>{i18n.t('loginScreen.signUp')}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const s = StyleSheet.create({
  formWrapper: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 30,
    marginHorizontal: 15,
  },
  formContainer: {
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 30,
  },
  registerQuestion: {
    textAlign: 'center',
    marginTop: 30,
  },
  signUpText: {
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default LoginForm;
