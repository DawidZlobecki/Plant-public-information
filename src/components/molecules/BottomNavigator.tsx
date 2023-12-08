import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import i18n from '../../i18n';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomNavigationItem from '../atoms/BottomNavigationItem';
import Notes from '../../assets/svgs/Notes';

enum BottomNavigatorItems {
  Notes = 'Notes',
  Scan = 'Scan',
  Home = 'Home',
  Favourites = 'Favourites',
  Profile = 'Profile',
}

const NavigationItems = [
  {
    id: BottomNavigatorItems.Notes,
    title: i18n.t('bottomNavigation.notes'),
    icon: <Notes />,
  },
  {
    id: BottomNavigatorItems.Scan,
    title: i18n.t('bottomNavigation.scan'),
    icon: <Notes />,
  },
  {
    id: BottomNavigatorItems.Home,
    title: i18n.t('bottomNavigation.home'),
    icon: <Notes />,
  },
  {
    id: BottomNavigatorItems.Favourites,
    title: i18n.t('bottomNavigation.favorites'),
    icon: <Notes />,
  },
  {
    id: BottomNavigatorItems.Profile,
    title: i18n.t('bottomNavigation.profile'),
    icon: <Notes />,
  },
];

const BottomNavigator = () => {
  const {bottom} = useSafeAreaInsets();
  const [selectedScreen, setSelectedScreen] = useState(
    BottomNavigatorItems.Home,
  );
  return (
    <View style={[s.mainContainer, {paddingBottom: bottom}]}>
      {NavigationItems.map(item => {
        return <BottomNavigationItem key={item.id} title={item.title} />;
      })}
    </View>
  );
};

export default BottomNavigator;

const s = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 100,
    backgroundColor: 'red',
  },
});
