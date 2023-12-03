import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Colors from '../../styles/colors';

interface ButtonProps {
  onPress: () => void;
  title: string;
  buttonStyles?: ViewStyle;
  buttonTextStyles?: TextStyle;
}

const Button = ({
  title,
  onPress,
  buttonStyles,
  buttonTextStyles,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[s.button, buttonStyles]}>
      <Text style={[s.buttonText, buttonTextStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const s = StyleSheet.create({
  button: {
    height: 55,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  buttonText: {
    textAlign: 'center',
    lineHeight: 55,
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold',
  },
});
