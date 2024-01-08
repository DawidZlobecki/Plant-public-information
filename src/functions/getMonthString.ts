import i18n from '../i18n';

const monthNames = [
  i18n.t('months.january'),
  i18n.t('months.february'),
  i18n.t('months.march'),
  i18n.t('months.april'),
  i18n.t('months.may'),
  i18n.t('months.june'),
  i18n.t('months.july'),
  i18n.t('months.august'),
  i18n.t('months.september'),
  i18n.t('months.october'),
  i18n.t('months.november'),
  i18n.t('months.december'),
];

export const getMonthString = (monthNumber: number): string => {
  return monthNames[monthNumber];
};
