import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../components/molecules/Header';
import BottomNavigator from '../components/molecules/BottomNavigator';
import ScreenWrapper, {
  BottomNavigatorItems,
} from '../components/molecules/ScreenWrapper';

const NotificationsScreen: React.FC = () => {
  const {top} = useSafeAreaInsets();
  return (
    <ScreenWrapper selectedScreen={BottomNavigatorItems.Notifications}>
      <></>
    </ScreenWrapper>
  );
};

export default NotificationsScreen;
