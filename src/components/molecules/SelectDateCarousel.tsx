import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import SelectDateCarouselItem from './SelectDateCarouselItem';

export interface DaysArrayItem {
  date: number;
  day: string;
  month: string;
  fullDate: Date;
}

interface SelectDateCarouselProps {
  days: Array<DaysArrayItem>;
  selectedDay: number;
  setSelectedDay: React.Dispatch<React.SetStateAction<number>>;
}

const SelectDateCarousel: React.FC<SelectDateCarouselProps> = ({
  days,
  selectedDay,
  setSelectedDay,
}) => {
  return (
    <FlatList
      data={days}
      horizontal
      renderItem={({ item, index }: { item: DaysArrayItem; index: number }) => (
        <SelectDateCarouselItem
          item={item}
          isSelected={days[selectedDay] == days[index]}
          setSelectedDay={setSelectedDay}
          index={index}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ width: 25 }} />}
      keyExtractor={item => item.day}
    />
  );
};

export default SelectDateCarousel;
