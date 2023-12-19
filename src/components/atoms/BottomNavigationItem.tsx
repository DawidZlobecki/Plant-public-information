import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../styles/colors';

interface BottomNavigationItemProps {
  title: string;
  icon: React.ReactElement;
  changeScreen: () => void;
  isSelected: boolean;
}

const BottomNavigationItem = ({
  title,
  icon,
  changeScreen,
  isSelected,
}: BottomNavigationItemProps) => {
  const clonedIcon = React.cloneElement(icon, {});
  return (
    <TouchableOpacity onPress={changeScreen} style={[s.mainContainer]}>
      {clonedIcon}
    </TouchableOpacity>
  );
};

export default BottomNavigationItem;

const s = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
