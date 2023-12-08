import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FormikProps} from 'formik';
import Colors from '../../styles/colors';
import hexaOpacity from '../../styles/hexaOpacity';
import CrossedEye from '../../assets/svgs/CrossedEye';

interface InputProps {
  label: string;
  formikProps: FormikProps<any>;
  formikKey: string;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string | any;
  icon: React.ReactNode;
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  formikProps,
  formikKey,
  placeholder,
  error,
  icon,
  isPassword = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={s.container}>
      <TextInput
        style={[s.input]}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        value={formikProps.values[formikKey]}
        placeholder={placeholder}
        secureTextEntry={isPassword ? !isPasswordVisible : false}
      />
      {isPassword && (
        <TouchableOpacity
          style={s.eyeIconContainer}
          onPress={handlePasswordVisibility}>
          <CrossedEye />
        </TouchableOpacity>
      )}
      <View style={s.iconContainer}>{icon}</View>
      <Text style={[s.errorMessage]}>{error && error}</Text>
    </View>
  );
};
const s = StyleSheet.create({
  container: {},
  input: {
    height: 40,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingLeft: 55,
    paddingRight: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: `${Colors.black}${hexaOpacity(0.15)}`,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  iconContainer: {
    position: 'absolute',
    alignSelf: 'center',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
  },
  eyeIconContainer: {
    position: 'absolute',
    alignSelf: 'center',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
  },
  errorMessage: {
    color: Colors.red,
    fontSize: 12,
    paddingTop: 5,
    height: 30,
  },
});

export default Input;
