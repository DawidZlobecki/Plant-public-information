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
  buttonStyles?: ViewStyle | ViewStyle[];
  buttonTextStyles?: TextStyle | TextStyle[];
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
    height: 60,
    backgroundColor: Colors.primary_800,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    lineHeight: 55,
    fontSize: 20,
    color: Colors.white,
    fontWeight: '500',
  },
});
