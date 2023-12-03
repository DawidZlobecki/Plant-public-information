import React from 'react';
import {View, TextInput, StyleSheet, Text, Image} from 'react-native';
import {FormikProps} from 'formik';
import Colors from '../../styles/colors';

interface InputProps {
  label: string;
  formikProps: FormikProps<any>;
  formikKey: string;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string | any;
  icon: any;
}

const Input: React.FC<InputProps> = ({
  label,
  formikProps,
  formikKey,
  placeholder,
  secureTextEntry = false,
  error,
  icon,
}) => {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        value={formikProps.values[formikKey]}
        placeholder={placeholder}
      />
      <Image source={icon} style={[s.icon]} resizeMode="stretch" />
      <Text style={[s.errorMessage]}>{error && error}</Text>
    </View>
  );
};
const s = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    backgroundColor: Colors.light_grey,
    paddingHorizontal: 10,
    paddingLeft: 40,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  icon: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  errorMessage: {
    color: Colors.red,
    fontSize: 12,
    marginTop: 5,
  },
});

export default Input;
