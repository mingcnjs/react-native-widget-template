import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IWeek} from '../../types/date';
import {getCurrentWeek, getTodayDate} from '../../utils/dateUtils';
import HorizontalRowCalendar from '../horizontalRowCalendar/HorizontalRowCalendar';

const styles = StyleSheet.create({
  container: {paddingHorizontal: 10, marginBottom: 8},
});

const WidgetFooter = () => {
  const today = getTodayDate();

  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [, setCurrentWeek] = useState<IWeek>(getCurrentWeek());

  return (
    <View style={styles.container}>
      <HorizontalRowCalendar
        selectedDate={selectedDate}
        markedDays={[today]}
        onChangeWeek={week => {
          setCurrentWeek(week);
          setSelectedDate(
            week.weekId === 0 ? today : new Date(week.startOfWeek),
          );
        }}
        onPressDay={date => setSelectedDate(date)}
      />
    </View>
  );
};

export default WidgetFooter;
