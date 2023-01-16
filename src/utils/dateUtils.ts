import {endOfWeek, startOfWeek} from 'date-fns';
import {IWeek} from '../types/date';

export function getTodayDate() {
  const today = new Date();
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    0,
    0,
    0,
    0,
  );
}

export function getWeek(date: Date): IWeek {
  const startDate = startOfWeek(date);
  return {
    weekId: 0,
    startOfWeek: startDate,
    endOfWeek: endOfWeek(date),
  };
}

export function getCurrentWeek(): IWeek {
  return getWeek(getTodayDate());
}
