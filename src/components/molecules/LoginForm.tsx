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
import {useDispatch} from 'react-redux';
import {login} from '../../redux/slices/authSlice';
import Mail from '../../assets/svgs/Mail';
import Lock from '../../assets/svgs/Lock';

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
  const dispatch = useDispatch();

  const navigation =
    useNavigation<NavigationProp<UnauthenticatedStackParamList>>();

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    dispatch(login({username: 'exampleUser'}));
  };
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={(values: FormValues) => {
        handleLogin();
      }}>
      {(formikProps: FormikProps<FormValues>) => (
        <View style={s.formContainer}>
          <Text style={[s.logInText]}>{i18n.t('loginScreen.login')}</Text>

          <Text style={[s.provideDataText]}>
            {i18n.t('loginScreen.provideDataToLogIn')}
          </Text>

          <Input
            label={i18n.t('loginScreen.email')}
            formikProps={formikProps}
            formikKey="email"
            placeholder={i18n.t('loginScreen.insertEmail')}
            error={formikProps.touched.email && formikProps.errors.email}
            icon={<Mail />}
          />

          <Input
            label={i18n.t('loginScreen.password')}
            formikProps={formikProps}
            formikKey="password"
            placeholder={i18n.t('loginScreen.insertPassword')}
            error={formikProps.touched.password && formikProps.errors.password}
            icon={<Lock />}
            isPassword
          />

          <Button
            buttonStyles={[{marginTop: 30}]}
            title={i18n.t('loginScreen.login')}
            onPress={formikProps.handleSubmit}
          />
          <TouchableOpacity style={[s.forgotPasswordContainer]}>
            <Text style={[s.forgotPasswordText]}>
              {i18n.t('loginScreen.dontRememberPassword')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const s = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 30,
  },
  logInText: {
    fontSize: 40,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 10,
  },
  provideDataText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.primary_lighter,
    marginBottom: 25,
  },
  forgotPasswordContainer: {},
  forgotPasswordText: {
    textAlign: 'right',
    color: Colors.turquoise,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default LoginForm;
