import { getDayString } from './getDayString';
import { getMonthString } from './getMonthString';

export const getNext7DaysArray = () => {
  const daysArray = [];

  for (let i = 0; i < 7; i++) {
    const today = new Date();
    today.setDate(today.getDate() + i);

    const day = today.getDate();

    const data = {
      date: day,
      day: getDayString(today.getDay()),
      month: getMonthString(today.getMonth() + 1),
      fullDate: today,
    };
    daysArray.push(data);
  }

  return daysArray;
};
