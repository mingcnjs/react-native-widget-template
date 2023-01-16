import React, {ReactNode} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {layoutColors} from '../themes/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: layoutColors.white,
    shadowOffset: {height: 0, width: 0},
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowColor: layoutColors.blueMain,
    elevation: 8,
    borderBottomColor: layoutColors.blue4,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

type Props = {
  opacityAnimation:
    | Animated.AnimatedValue
    | Animated.AnimatedInterpolation<number>;
  LeftButtons?: ReactNode;
  RightButtons?: ReactNode;
};

const OpacityAnimatedHeader = React.memo((props: Props) => {
  const {opacityAnimation, LeftButtons, RightButtons} = props;
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[styles.header, {paddingTop: top + 10}]}
      pointerEvents={'box-none'}>
      <Animated.View
        style={[styles.background, {opacity: opacityAnimation}]}
        pointerEvents={'none'}
      />
      <View style={styles.row}>{Boolean(LeftButtons) && LeftButtons}</View>
      {Boolean(RightButtons) && <View style={styles.row}>{RightButtons}</View>}
    </View>
  );
});

export default OpacityAnimatedHeader;
