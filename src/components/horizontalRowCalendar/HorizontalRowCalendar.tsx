import React, {FC, useEffect, useState} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from 'react-native';
import RowWeek from './RowWeek';
import {addDays, endOfWeek, startOfWeek} from 'date-fns';
import {IWeek} from '../../types/date';

function initializeWeeks(disableFutureWeeks: boolean): IWeek[] {
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today, {weekStartsOn: 1});
  const endOfCurrentWeek = endOfWeek(today, {weekStartsOn: 1});
  const currentWeek: IWeek = {
    weekId: 0,
    startOfWeek: startOfCurrentWeek,
    endOfWeek: endOfCurrentWeek,
  };
  let weeks: IWeek[] = [currentWeek];

  if (!disableFutureWeeks) {
    weeks = [
      ...weeks,
      {
        weekId: 1,
        startOfWeek: addDays(startOfCurrentWeek, 7),
        endOfWeek: addDays(endOfCurrentWeek, 7),
      },
    ];
  }
  return weeks;
}

function getNewWeek(direction: 'future' | 'past', edgeWeek: IWeek): IWeek {
  let weekId: number;
  let startOfNewWeek: Date;
  let endOfNewWeek: Date;
  if (direction === 'future') {
    weekId = edgeWeek.weekId + 1;
    startOfNewWeek = addDays(edgeWeek.endOfWeek, 1);
    endOfNewWeek = endOfWeek(startOfNewWeek);
  } else {
    weekId = edgeWeek.weekId - 1;
    endOfNewWeek = addDays(edgeWeek.startOfWeek, -1);
    startOfNewWeek = startOfWeek(endOfNewWeek);
  }

  return {
    weekId,
    startOfWeek: startOfNewWeek,
    endOfWeek: endOfNewWeek,
  };
}

type Props = {
  selectedDate: Date;
  width?: number;
  markedDays?: Date[];
  onChangeWeek?: (week: IWeek) => void;
  onPressDay?: (date: Date) => void;
  disableFutureWeeks?: boolean;
};

const HorizontalRowCalendar: FC<Props> = React.memo(props => {
  const {
    selectedDate,
    markedDays,
    onChangeWeek,
    onPressDay,
    disableFutureWeeks = false,
    width,
  } = props;

  const {width: windowWidth} = useWindowDimensions();

  const contentWidth = width || windowWidth;

  const [weeks, setWeeks] = useState<IWeek[]>([]);
  const [currentWeekId, setCurrentWeekId] = useState(0);

  useEffect(() => {
    if (weeks.length === 0) {
      setWeeks(initializeWeeks(disableFutureWeeks));
    }
  }, [weeks, disableFutureWeeks]);

  function onCurrentWeekChange(newCurrentWeekId: number) {
    const currentWeekIndex = weeks.findIndex(
      week => week.weekId === newCurrentWeekId,
    );
    const isLastWeek = currentWeekIndex === weeks.length - 1;
    if (isLastWeek) {
      setWeeks(prevState => [
        ...prevState,
        getNewWeek('future', prevState[currentWeekIndex]),
      ]);
    }
  }

  function onMomentumScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const offset = event.nativeEvent.contentOffset.x;
    const currentWeekIndex = Math.round(offset / contentWidth);
    const newCurrentWeek = weeks[currentWeekIndex];
    const newCurrentWeekId = newCurrentWeek.weekId;

    if (currentWeekId !== newCurrentWeekId) {
      if (onChangeWeek) {
        onChangeWeek(newCurrentWeek);
      }
      if (!disableFutureWeeks) {
        onCurrentWeekChange(newCurrentWeekId);
      }
      setCurrentWeekId(() => {
        return newCurrentWeekId;
      });
    }
  }

  return (
    <FlatList
      horizontal
      pagingEnabled
      onMomentumScrollEnd={onMomentumScrollEnd}
      showsHorizontalScrollIndicator={false}
      data={weeks}
      renderItem={({item}) => (
        <RowWeek
          selectedDate={selectedDate}
          startOfWeek={item.startOfWeek}
          markedDays={markedDays}
          onPressDay={onPressDay}
        />
      )}
      keyExtractor={item => `${item.weekId}`}
      getItemLayout={(data, index) => ({
        length: contentWidth,
        offset: contentWidth * index,
        index,
      })}
    />
  );
});

export default HorizontalRowCalendar;
