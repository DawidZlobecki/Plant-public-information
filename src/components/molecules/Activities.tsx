import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDayString } from '../../functions/getDayString';
import SelectDateCarousel from './SelectDateCarousel';
import { getNext7DaysArray } from '../../functions/getNext7DaysArray';
import i18n from '../../i18n';
import Colors from '../../styles/colors';
import ActivitiesForSelectedDay from './ActivitiesForSelectedDay';
import IncomingActivities from './IncomingActivities';

const Activities: React.FC = () => {
  const days = getNext7DaysArray();
  const [selectedDay, setSelectedDay] = React.useState<number>(0);

  return (
    <View style={s.mainWrapper}>
      <SelectDateCarousel
        days={days}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      <Text style={[s.header]}>{i18n.t('homeScreen.incomingActivities')}</Text>

      <ActivitiesForSelectedDay selectedDayData={days[selectedDay]} />

      <IncomingActivities />
    </View>
  );
};

export default Activities;

const s = StyleSheet.create({
  mainWrapper: {
    marginHorizontal: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black_600,
    marginVertical: 16,
  },
});
