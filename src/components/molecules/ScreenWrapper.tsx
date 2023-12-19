import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import BottomNavigator from './BottomNavigator';
import i18n from '../../i18n';
import Notes from '../../assets/svgs/Notes';
import Camera from '../../assets/svgs/Camera';
import Logo from '../../assets/svgs/Logo';
import Heart from '../../assets/svgs/Heart';
import User from '../../assets/svgs/User';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthenticatedStackParamList} from '../../navigation/AuthenticatedStack';

interface ScreenWrapperProps {
  children: React.ReactNode;
  selectedScreen?: BottomNavigatorItems;
}
export enum BottomNavigatorItems {
  Calendar = 'Calendar',
  Collection = 'Collection',
  Home = 'Home',
  Notifications = 'Notifications',
  More = 'More',
}

export const NavigationItems = [
  {
    id: BottomNavigatorItems.Calendar,
    title: i18n.t('bottomNavigation.Calendar'),
    icon: <Notes />,
  },
  {
    id: BottomNavigatorItems.Collection,
    title: i18n.t('bottomNavigation.Collection'),
    icon: <Camera />,
  },
  {
    id: BottomNavigatorItems.Home,
    title: i18n.t('bottomNavigation.home'),
    icon: <Logo width={27} height={37} />,
  },
  {
    id: BottomNavigatorItems.Notifications,
    title: i18n.t('bottomNavigation.Notifications'),
    icon: <Heart />,
  },
  {
    id: BottomNavigatorItems.More,
    title: i18n.t('bottomNavigation.More'),
    icon: <User />,
  },
];
const ScreenWrapper = ({
  children,
  selectedScreen: screen,
}: ScreenWrapperProps) => {
  const navigation =
    useNavigation<NavigationProp<AuthenticatedStackParamList>>();
  const [selectedScreen, setSelectedScreen] = useState<BottomNavigatorItems>(
    screen || BottomNavigatorItems.Home,
  );

  useEffect(() => {
    navigation.navigate(selectedScreen);
  }, [selectedScreen]);
  return (
    <>
      <View style={[{flex: 1}]}>{children}</View>
      <BottomNavigator
        selectedScreen={selectedScreen}
        setSelectedScreen={setSelectedScreen}
      />
    </>
  );
};

export default ScreenWrapper;
