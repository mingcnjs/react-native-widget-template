import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {addDays, isBefore, isSameDay} from 'date-fns';
import {WEEK_DAYS} from '../../constants/constants';
import {getTodayDate} from '../../utils/dateUtils';
import {layoutColors} from '../../constants/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  week: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingTop: 5,
    paddingBottom: 8,
    width: 40,
  },
  todayDay: {},
  activeDay: {backgroundColor: layoutColors.blue6},
  weekDayName: {
    fontSize: 11,
    lineHeight: 24,
    fontFamily: 'NotoSans-Regular',
    color: layoutColors.white,
    marginTop: -6,
  },
  activeWeekDayName: {color: layoutColors.blueMain},
  date: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 700,
    fontFamily: 'NotoSans-Regular',
    color: layoutColors.white,
    marginBottom: 1,
  },
  activeDate: {color: layoutColors.blueMain},
  dot: {
    height: 4,
    aspectRatio: 1,
    borderRadius: 4,
    backgroundColor: layoutColors.blue7,
    opacity: 0,
    marginBottom: 4,
  },
  dotVisible: {opacity: 0.6},
});

function initializeWeek(startOfWeek: Date): Date[] {
  return new Array(7).fill(1).map((item, index) => {
    if (index === 0) {
      return startOfWeek;
    }
    return addDays(startOfWeek, index);
  });
}

type Props = {
  selectedDate: Date;
  startOfWeek: Date;
  markedDays?: Date[];
  onPressDay?: (date: Date) => void;
};

const RowWeek = React.memo((props: Props) => {
  const {selectedDate, startOfWeek, markedDays, onPressDay} = props;

  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    if (days.length === 0) {
      const weekDays = initializeWeek(startOfWeek);
      setDays(weekDays);
    }
  }, [days, startOfWeek]);

  return (
    <View style={styles.week}>
      {days.map(day => {
        const today = getTodayDate();
        let isMarked = false;
        let isToday = false;
        const isPast = isBefore(day, today);
        if (!isPast || !isToday) {
          isMarked = Boolean(
            markedDays &&
              markedDays.find(markedDay => isSameDay(new Date(markedDay), day)),
          );

          isToday = isSameDay(day, getTodayDate());
        }

        const isActive = isSameDay(selectedDate, day);
        return (
          <View key={day.toISOString()} style={styles.dayContainer}>
            <TouchableHighlight
              activeOpacity={0.7}
              onPress={() => {
                if (onPressDay) {
                  onPressDay(day);
                }
              }}
              underlayColor={layoutColors.blue5}
              style={[
                styles.day,
                isToday && styles.todayDay,
                isActive && styles.activeDay,
              ]}>
              <>
                <View style={[styles.dot, isMarked && styles.dotVisible]} />
                <Text style={[styles.date, isActive && styles.activeDate]}>
                  {day.getDate()}
                </Text>
                <Text
                  style={[
                    styles.weekDayName,
                    isActive && styles.activeWeekDayName,
                  ]}>
                  {WEEK_DAYS[day.getDay()].slice(0, 3)}
                </Text>
              </>
            </TouchableHighlight>
          </View>
        );
      })}
    </View>
  );
});

export default RowWeek;
