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
import DontHaveAccount from '../components/atoms/DontHaveAccount';

const RegisterScreen: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({username: 'exampleUser'}));
  };

  const {top} = useSafeAreaInsets();
  return (
    <View style={[s.mainContainer]}>
      <ScrollView style={[{paddingTop: top, flex: 1}]}>
        <View style={[s.topFlowerContainer]}>
          <Image
            source={require('../assets/images/registerImage.png')}
            style={[{width: '100%'}]}
          />
        </View>
        <RegisterForm />
        <View style={[s.haveAnAccountWrapper]}></View>
      </ScrollView>
      <DontHaveAccount isRegisterScreen />
    </View>
  );
};

export default RegisterScreen;

const s = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  topFlowerContainer: {
    width: '100%',
  },
  haveAnAccountWrapper: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
  },
});
