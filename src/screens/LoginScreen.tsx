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
import DontHaveAccount from '../components/atoms/DontHaveAccount';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LoginScreen: React.FC = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[s.mainContainer]}>
      <ScrollView style={[{paddingTop: top, flex: 1}]}>
        <View style={[s.topFlowerContainer]}>
          <Image
            source={require('../assets/images/loginImage.png')}
            style={[{width: '100%'}]}
          />
        </View>
        <LoginForm />
        <View style={[s.dontHaveAnAccountWrapper]}></View>
      </ScrollView>
      <DontHaveAccount />
    </View>
  );
};

export default LoginScreen;

const s = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  topFlowerContainer: {
    width: '100%',
  },
  dontHaveAnAccountWrapper: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
  },
});
