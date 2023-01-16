import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type Props = {
  style?: StyleProp<ViewStyle>;
};

export default function DownArrowIcon({style}: Props) {
  return (
    <Svg width={7} height={5} viewBox="0 0 7 5" fill="none" style={style}>
      <Path
        d="M1.25323 1L3.62663 4L6.00002 1"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
