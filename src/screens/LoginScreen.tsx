import React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../redux/slices/authSlice';
import {useTranslation} from 'react-i18next';
import LoginForm from '../components/molecules/LoginForm';
import Colors from '../styles/colors';

const LoginScreen: React.FC = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      <View style={[s.topFlowerContainer]}>
        <Image
          source={require('../assets/images/hangingFlower1.png')}
          style={[s.topFlower]}
        />
      </View>
      <LoginForm />
      <View style={[s.bottomFlowerContainer]}>
        <Image source={require('../assets/images/potFlower1.png')} style={[]} />
      </View>
    </>
  );
};

export default LoginScreen;

const s = StyleSheet.create({
  topFlowerContainer: {
    width: '100%',
  },
  topFlower: {
    marginLeft: 25,
  },
  bottomFlowerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  bottomFlower: {},
});
