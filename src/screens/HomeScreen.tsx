import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../components/molecules/Header';
import BottomNavigator from '../components/molecules/BottomNavigator';
import ScreenWrapper, {
  BottomNavigatorItems,
} from '../components/molecules/ScreenWrapper';
import i18n from '../i18n';

const HomeScreen: React.FC = () => {
  const {top} = useSafeAreaInsets();
  return (
    <ScreenWrapper selectedScreen={BottomNavigatorItems.Home}>
      <ScrollView style={[s.mainWrapper, {paddingTop: top}]}>
        <Text style={[s.header]}>{`${i18n.t('homeScreen.hello')} Ania!`}</Text>
        <Text style={[s.subHeader]}>
          {i18n.t('homeScreen.timeToTakeCareOfPlants')}
        </Text>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const s = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
  },
  subHeader: {
    fontSize: 20,
    // fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
});
