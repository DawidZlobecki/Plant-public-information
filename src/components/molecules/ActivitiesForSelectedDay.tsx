import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { DaysArrayItem } from './SelectDateCarousel';
import i18n from '../../i18n';
import { isSameDate } from '../../functions/isSameDate';
import Colors from '../../styles/colors';
import ActivitiesItem from '../atoms/ActivitiesItem';

interface ActivitiesForSelectedDayProps {
  selectedDayData: DaysArrayItem;
}

const todayActivitiesDummyData = [
  {
    id: 1,
    name: 'Monstera deliciosa',
    img: require('../../assets/images/monsteraDeliciosa.jpg'),
    dateOfActivity: '2021-05-01',
    timeOfActivity: '10:00',
    typeOfActivity: 0,
  },
];

const ActivitiesForSelectedDay: React.FC<ActivitiesForSelectedDayProps> = ({
  selectedDayData,
}) => {
  const headerName = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const selectedDate = new Date(selectedDayData.fullDate);

    if (isSameDate(selectedDate, today)) {
      return i18n.t('homeScreen.today');
    } else if (isSameDate(selectedDate, tomorrow)) {
      return i18n.t('homeScreen.tomorrow');
    } else {
      return i18n.t('homeScreen.day');
    }
  };
  return (
    <View>
      <Text style={[s.headerText]}>{`${i18n.t(
        'homeScreen.for',
      )} ${headerName()}`}</Text>
      <Text
        style={[
          s.subHeaderText,
        ]}>{`${selectedDayData.day}, ${selectedDayData.date} ${selectedDayData.month}`}</Text>

      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todayActivitiesDummyData}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => <ActivitiesItem item={item} />}
      />
    </View>
  );
};

export default ActivitiesForSelectedDay;

const s = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.primary_400,
  },
  subHeaderText: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.light_grey,
    marginBottom: 16,
  },
});
