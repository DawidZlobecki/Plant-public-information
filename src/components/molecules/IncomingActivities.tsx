import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import i18n from '../../i18n';
import Colors from '../../styles/colors';
import { ActivityType } from '../../functions/handleActivityType';
import ActivitiesItem from '../atoms/ActivitiesItem';
import CategoryItem from '../atoms/CategoryItem';

export interface Categories {
  name: string;
}

const IncomingActivities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<Categories>({
    name: i18n.t('activities.all'),
  });

  const categories = [
    { name: i18n.t('activities.all') },
    { name: i18n.t('activities.watering') },
    { name: i18n.t('activities.sprinkling') },
    { name: i18n.t('activities.fertilizing') },
    { name: i18n.t('activities.replanting') },
    { name: i18n.t('activities.control') },
    { name: i18n.t('activities.spraying') },
    { name: i18n.t('activities.pruning') },
    { name: i18n.t('activities.other') },
  ];

  const activitiesDummyData = [
    {
      id: 1,
      name: 'Monstera deliciosa',
      img: require('../../assets/images/monsteraDeliciosa.jpg'),
      dateOfActivity: '2021-05-01',
      timeOfActivity: '10:00',
      typeOfActivity: 0,
    },
    {
      id: 2,
      name: 'Monstera deliciosa',
      img: require('../../assets/images/monsteraDeliciosa.jpg'),
      dateOfActivity: '2021-05-01',
      timeOfActivity: '10:00',
      typeOfActivity: 0,
    },
  ];
  return (
    <View style={[{ paddingBottom: 16 }]}>
      <Text style={[s.headerText]}>{`${i18n.t('homeScreen.incoming')}`}</Text>

      <FlatList
        style={[{ marginBottom: 16 }]}
        horizontal
        keyExtractor={item => item.name}
        data={categories}
        ItemSeparatorComponent={() => <View style={[{ width: 25 }]} />}
        renderItem={({ item }) => (
          <CategoryItem
            setIsSelected={setSelectedCategory}
            item={item}
            isSelected={item.name === selectedCategory.name}
          />
        )}
      />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={activitiesDummyData}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => <ActivitiesItem item={item} />}
      />
    </View>
  );
};

export default IncomingActivities;

const s = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.primary_400,
    marginVertical: 16,
  },
});
