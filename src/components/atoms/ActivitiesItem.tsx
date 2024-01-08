import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../../styles/colors';
import hexaOpacity from '../../styles/hexaOpacity';
import CheckButton from './CheckButton';
import { handleActivityType } from '../../functions/handleActivityType';

interface ActivitiesItemProps {
  item: {
    id: number;
    name: string;
    img: ImageSourcePropType;
    dateOfActivity: string;
    timeOfActivity: string;
    typeOfActivity: number;
  };
}

const ActivitiesItem = ({ item }: ActivitiesItemProps) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  return (
    <View style={s.mainContainer}>
      <CheckButton isSelected={isSelected} setIsSelected={setIsSelected} />
      <Image source={item.img} style={s.itemImage} />
      <View style={[s.textContainer]}>
        <Text style={[s.plantName, isSelected && s.isSelectedPlantName]}>
          {item.name}
        </Text>
        <Text>Dzisiaj 16:35</Text>
      </View>
      <View style={[s.plantActivityTypeContainer]}>
        {handleActivityType(item.typeOfActivity)}
      </View>
    </View>
  );
};

export default ActivitiesItem;

const s = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: 86,
    borderRadius: 12,
    borderColor: `${Colors.grey}${hexaOpacity(0.85)}`,
    borderWidth: 1,
    backgroundColor: Colors.white_200,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginLeft: 16,
  },
  plantName: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black_700,
  },
  isSelectedPlantName: {
    textDecorationLine: 'line-through',
  },
  textContainer: {
    marginLeft: 16,
  },
  plantActivityTypeContainer: {
    flex: 1,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
