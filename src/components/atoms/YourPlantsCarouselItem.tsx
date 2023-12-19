import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../styles/colors';
import Bed from '../../assets/svgs/Bed';

interface YourPlantsCarouselItemProps {
  imageSource: ImageSourcePropType;
  name: string;
  onPress: () => void;
}

const YourPlantsCarouselItem: React.FC<YourPlantsCarouselItemProps> = ({
  imageSource,
  name,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[s.mainWrapper]} onPress={onPress}>
      <Image source={imageSource} style={[s.image]} />
      <View style={[s.label]}>
        <Text style={[s.name]}>{name}</Text>
        <View style={[s.iconContainer]}>
          <Bed />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default YourPlantsCarouselItem;

const s = StyleSheet.create({
  mainWrapper: {
    borderRadius: 12,
    marginRight: 20,
    marginBottom: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  image: {
    width: 250,
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  label: {
    width: 250,
    height: 45,
    backgroundColor: Colors.primary_700,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: Colors.neutral_600,
    letterSpacing: -0.15,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 7,
    backgroundColor: Colors.primary_400,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
