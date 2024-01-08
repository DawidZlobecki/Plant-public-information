import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../styles/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import hexaOpacity from '../../styles/hexaOpacity';
import i18n from '../../i18n';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { UnauthenticatedStackParamList } from '../../navigation/UnauthenticatedStack';
import DontHaveAnAccountWrapper from '../../assets/svgs/DontHaveAccountWrapper';

const { width } = Dimensions.get('window');

interface DontHaveAccountProps {
  isRegisterScreen?: boolean;
}

const DontHaveAccount = ({
  isRegisterScreen = false,
}: DontHaveAccountProps) => {
  const { bottom } = useSafeAreaInsets();
  const navigation =
    useNavigation<NavigationProp<UnauthenticatedStackParamList>>();

  const handleNavigate = () => {
    if (isRegisterScreen) navigation.navigate('Login');
    else navigation.navigate('Register');
  };

  return (
    <>
      {/* <View style={[s.outerWrapper]}>
        <View style={[s.mainContainer, { paddingBottom: bottom }]}>
          <View style={[s.textWrapper]}>
            <Text style={[s.dontHaveAccountText]}>
              {isRegisterScreen
                ? `${i18n.t('loginScreen.haveAnAccount')} `
                : `${i18n.t('loginScreen.dontHaveAnAccountYet')} `}
            </Text>
            <TouchableOpacity onPress={handleNavigate}>
              <Text style={[s.registerText]}>
                {isRegisterScreen
                  ? i18n.t('loginScreen.login')
                  : i18n.t('loginScreen.signUp')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
      <DontHaveAnAccountWrapper>
        <View
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
            backgroundColor: 'red',
          }}>
          <Text>asd</Text>
        </View>
      </DontHaveAnAccountWrapper>
    </>
  );
};

export default DontHaveAccount;

const s = StyleSheet.create({
  outerWrapper: {
    width: width * 1.6,
    height: width * 1.2,
    alignSelf: 'center',
    backgroundColor: `${Colors.primary_700}${hexaOpacity(0.3)}`,
    paddingTop: 30,
    borderTopLeftRadius: width,
    borderTopRightRadius: width,
    bottom: -width * 0.975,
    alignItems: 'center',
  },
  mainContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  dontHaveAccountText: {
    fontSize: 15,
    color: Colors.black_600,
    fontWeight: '400',
  },
  registerText: {
    fontSize: 15,
    color: Colors.turquoise,
    fontWeight: '400',
  },
});
