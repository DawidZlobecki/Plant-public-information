import React from 'react';
import { DaysArrayItem } from './SelectDateCarousel';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../styles/colors';

interface SelectDateCarouselItemProps {
  item: DaysArrayItem;
  isSelected: boolean;
  setSelectedDay: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}

const SelectDateCarouselItem: React.FC<SelectDateCarouselItemProps> = ({
  item,
  isSelected,
  setSelectedDay,
  index,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedDay(index);
      }}
      style={[
        s.itemContainer,
        isSelected && { backgroundColor: Colors.primary_800 },
      ]}>
      <Text style={[s.dayText, isSelected && { color: Colors.primary_900 }]}>
        {item.day}
      </Text>
      <Text style={[s.dateText, isSelected && { color: Colors.primary_900 }]}>
        {item.date}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectDateCarouselItem;

const s = StyleSheet.create({
  itemContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary_900,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  dayText: { color: Colors.primary_lighter, fontSize: 14 },
  dateText: { color: Colors.primary_lighter, fontSize: 12 },
});
