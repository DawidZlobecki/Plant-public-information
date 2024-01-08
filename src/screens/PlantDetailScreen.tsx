import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';
import ScreenWrapper, {
  BottomNavigatorItems,
} from '../components/molecules/ScreenWrapper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../styles/colors';
import hexaOpacity from '../styles/hexaOpacity';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ArrowRight from '../assets/svgs/ArrowRight';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthenticatedStackParamList } from '../navigation/AuthenticatedStack';
import i18n from '../i18n';

const PlantDetailScreen: React.FC = ({}) => {
  const { top } = useSafeAreaInsets();
  const navigation =
    useNavigation<NavigationProp<AuthenticatedStackParamList>>();
  return (
    <View style={[s.mainContainer]}>
      <ScrollView style={[{ flex: 1, paddingTop: top }]}>
        <View>
          <Image
            source={require('../assets//images/monsteraBackground.jpg')}
            style={[s.image]}
          />
          <View style={[s.imageCover]}>
            <TouchableOpacity
              style={[s.backArrowIcon]}
              onPress={() => navigation.goBack()}>
              <ArrowRight color={Colors.white} />
            </TouchableOpacity>
            <View style={[s.headersContainer]}>
              <Text style={[s.header]}>Monstera</Text>
              <Text style={[s.subHeader]}>Monstera deliciosa</Text>
            </View>
          </View>
        </View>
        <View style={[s.dataContainer]}>
          <Text style={[s.sectionHeader]}>
            {i18n.t('plantDetailScreen.generalRequirements')}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PlantDetailScreen;

const s = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: 300,
  },
  imageCover: {
    position: 'absolute',
    width: '100%',
    height: 300,
    backgroundColor: `${Colors.black}${hexaOpacity(0.3)}`,
  },
  backArrowIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    transform: [{ rotate: '180deg' }],
  },
  headersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: { color: Colors.white, fontSize: 32, fontWeight: '700' },
  subHeader: { color: Colors.white, fontSize: 20, fontWeight: '500' },
  dataContainer: {
    top: -50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: Colors.white,
    flex: 1,
  },
  sectionHeader: {
    fontSize: 32,
    fontWeight: '500',
    color: Colors.primary_400,
    marginTop: 16,
    marginBottomm: 26,
    textAlign: 'center',
  },
});
