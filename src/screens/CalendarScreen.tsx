import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../components/molecules/Header';
import BottomNavigator from '../components/molecules/BottomNavigator';
import ScreenWrapper, {
  BottomNavigatorItems,
} from '../components/molecules/ScreenWrapper';

const CalendarScreen: React.FC = () => {
  const {top} = useSafeAreaInsets();
  return (
    <ScreenWrapper selectedScreen={BottomNavigatorItems.Calendar}>
      <Text style={{marginTop: 150, marginLeft: 150}}>asd</Text>
    </ScreenWrapper>
  );
};

export default CalendarScreen;
