import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Check from '../../assets/svgs/Check';
import Colors from '../../styles/colors';

interface CheckButtonProps {
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckButton = ({ isSelected, setIsSelected }: CheckButtonProps) => {
  return (
    <TouchableOpacity
      style={[s.mainContainer, isSelected && s.selectedMainContainer]}
      onPress={() => setIsSelected(!isSelected)}>
      {isSelected && <Check />}
    </TouchableOpacity>
  );
};

export default CheckButton;

const s = StyleSheet.create({
  mainContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.black_550,
    borderWidth: 1,
  },
  selectedMainContainer: {
    borderWidth: 0,
    backgroundColor: Colors.primary,
  },
});
