import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import i18n from '../../i18n';
import ArrowRight from '../../assets/svgs/ArrowRight';
import { FlatList } from 'react-native-gesture-handler';
import YourPlantsCarouselItem from '../atoms/YourPlantsCarouselItem';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthenticatedStackParamList } from '../../navigation/AuthenticatedStack';

const DummyData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const YourPlantsCarousel: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<AuthenticatedStackParamList>>();
  return (
    <>
      <View style={[s.row]}>
        <Text style={s.text}>{i18n.t('homeScreen.yourPlants')}</Text>
        <TouchableOpacity onPress={() => console.log('TODO')}>
          <ArrowRight />
        </TouchableOpacity>
      </View>
      <FlatList
        data={DummyData}
        style={[{ paddingHorizontal: 20 }]}
        renderItem={({ item }) => (
          <YourPlantsCarouselItem
            name={item.title}
            onPress={() => navigation.navigate('PlantDetail')}
            imageSource={require('../../assets/images/plantExampleImage.png')}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
      />
    </>
  );
};

export default YourPlantsCarousel;

const s = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
});
