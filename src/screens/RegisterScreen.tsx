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
import RegisterForm from '../components/molecules/RegisterForm';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const RegisterScreen: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({username: 'exampleUser'}));
  };

  const {top} = useSafeAreaInsets();
  return (
    <>
      <View style={[s.topFlowerContainer, {marginTop: top}]}>
        <Image
          source={require('../assets/images/hangingFlower2.png')}
          style={[s.topFlower]}
        />
      </View>
      <View style={[{flex: 1}]}>
        <RegisterForm />
      </View>
      <View style={[s.bottomFlowerContainer]}>
        <Image source={require('../assets/images/potFlower2.png')} style={[]} />
      </View>
    </>
  );
};

export default RegisterScreen;

const s = StyleSheet.create({
  topFlowerContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  topFlower: {
    marginRight: 25,
  },
  bottomFlowerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  bottomFlower: {},
});
