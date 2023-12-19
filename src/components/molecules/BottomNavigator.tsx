import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import i18n from '../../i18n';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomNavigationItem from '../atoms/BottomNavigationItem';
import Notes from '../../assets/svgs/Notes';
import Camera from '../../assets/svgs/Camera';
import Heart from '../../assets/svgs/Heart';
import User from '../../assets/svgs/User';
import Logo from '../../assets/svgs/Logo';
import {BottomNavigatorItems, NavigationItems} from './ScreenWrapper';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface BottomNavigatorProps {
  selectedScreen: BottomNavigatorItems;
  setSelectedScreen: React.Dispatch<React.SetStateAction<BottomNavigatorItems>>;
}

const BottomNavigator = ({
  setSelectedScreen,
  selectedScreen,
}: BottomNavigatorProps) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={[s.mainContainer, {paddingBottom: bottom}]}>
      {NavigationItems.map(item => {
        return (
          <BottomNavigationItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            changeScreen={() => {
              setSelectedScreen(item.id);
            }}
            isSelected={selectedScreen === item.id}
          />
        );
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
    paddingHorizontal: 30,
    paddingVertical: 10,
    height: 100,
    borderTopWidth: 1,
    borderTopColor: Colors.black,
  },
});
