import i18n from '../i18n';

const shortCutDays = [
  i18n.t('shortDays.sun'),
  i18n.t('shortDays.mon'),
  i18n.t('shortDays.tue'),
  i18n.t('shortDays.wed'),
  i18n.t('shortDays.thu'),
  i18n.t('shortDays.fri'),
  i18n.t('shortDays.sat'),
];

export const getDayString = (day: number): string => {
  return shortCutDays[day];
};
