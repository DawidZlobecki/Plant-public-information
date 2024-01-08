import { StyleSheet, Text } from 'react-native';
import BellIcon from '../assets/svgs/BellIcon';
import ControlIcon from '../assets/svgs/ControlIcon';
import FertilizeIcon from '../assets/svgs/FertilizeIcon';
import ScissorsIcon from '../assets/svgs/Scissors';
import ShovelIcon from '../assets/svgs/ShovelIcon';
import SprayingIcon from '../assets/svgs/SprayingIcon';
import SprinklerIcon from '../assets/svgs/SprinklerIcon';
import WateringCanIcon from '../assets/svgs/WateringCan';
import i18n from '../i18n';

export enum ActivityType {
  Watering,
  Sprinkling,
  Fertilizing,
  Replanting,
  Control,
  Spraying,
  Other,
  Pruning,
  All,
}

export const handleActivityType = (type: ActivityType) => {
  switch (type) {
    case ActivityType.Watering:
      return (
        <>
          <WateringCanIcon />
          <Text>{i18n.t('activities.watering')}</Text>
        </>
      );
    case ActivityType.Sprinkling:
      return (
        <>
          <SprinklerIcon />
          <Text>{i18n.t('activities.sprinkling')}</Text>
        </>
      );
    case ActivityType.Fertilizing:
      return (
        <>
          <FertilizeIcon />
          <Text>{i18n.t('activities.fertilizing')}</Text>
        </>
      );
    case ActivityType.Replanting:
      return (
        <>
          <ShovelIcon />
          <Text>{i18n.t('activities.replanting')}</Text>
        </>
      );
    case ActivityType.Control:
      return (
        <>
          <ControlIcon />
          <Text>{i18n.t('activities.control')}</Text>
        </>
      );
    case ActivityType.Spraying:
      return (
        <>
          <SprayingIcon />
          <Text>{i18n.t('activities.spraying')}</Text>
        </>
      );
    case ActivityType.Pruning:
      return (
        <>
          <ScissorsIcon />;<Text>{i18n.t('activities.pruning')}</Text>
        </>
      );
    default:
      return (
        <>
          <BellIcon />
          <Text>{i18n.t('activities.other')}</Text>
        </>
      );
  }
};

const s = StyleSheet.create({
  mainContainer: {},
});
