import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../components/molecules/Header';
import BottomNavigator from '../components/molecules/BottomNavigator';

const HomeScreen: React.FC = () => {
  const {top} = useSafeAreaInsets();
  return (
    <>
      <ScrollView>
        <Header />
        <View>
          <Text>Welcome to Home Screen!</Text>
        </View>
      </ScrollView>
      <BottomNavigator />
    </>
  );
};

export default HomeScreen;
