import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../styles/colors';
import { Categories } from '../molecules/IncomingActivities';

interface CategoryItemProps {
  item: {
    name: string;
  };
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<Categories>>;
}

const CategoryItem = ({
  item,
  isSelected,
  setIsSelected,
}: CategoryItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => setIsSelected({ name: item.name })}
      style={[s.mainContainer, isSelected && s.isSelectedMainContainer]}>
      <Text style={[s.text, isSelected && s.isSelectedText]}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const s = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: Colors.white_200,
  },
  isSelectedMainContainer: {
    backgroundColor: Colors.primary_800,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black_600,
  },
  isSelectedText: {
    color: Colors.primary_900,
  },
});
