import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../components/molecules/Header';
import BottomNavigator from '../components/molecules/BottomNavigator';
import ScreenWrapper, {
  BottomNavigatorItems,
} from '../components/molecules/ScreenWrapper';
import i18n from '../i18n';
import YourPlantsCarousel from '../components/molecules/YourPlantsCarousel';
import Colors from '../styles/colors';
import TodayActivities from '../components/molecules/TodayActivities';

const HomeScreen: React.FC = () => {
  const {top} = useSafeAreaInsets();
  return (
    <ScreenWrapper selectedScreen={BottomNavigatorItems.Home}>
      <ScrollView style={[s.mainWrapper, {paddingTop: top}]}>
        <Text style={[s.header]}>{`${i18n.t(
          'homeScreen.hello',
        )} Słońce!`}</Text>
        <Text style={[s.subHeader]}>
          {i18n.t('homeScreen.timeToTakeCareOfPlants')}
        </Text>

        <YourPlantsCarousel />

        <View style={[s.separator]} />

        <TodayActivities />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const s = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 20,
  },
  subHeader: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginBottom: 28,
    paddingHorizontal: 20,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.neutral_200,
    marginTop: 16,
    marginBottom: 25,
    marginHorizontal: 20,
  },
});
