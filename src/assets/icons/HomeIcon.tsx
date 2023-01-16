import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TabIconProps} from '../../types/icons';

export default function HomeIcon(props: TabIconProps) {
  const {background = '#C7D6FF', focused = false, stroke = '#1652F0'} = props;

  const bgColor = focused ? background : 'transparent';

  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Path
        d="M19.9572 21C20.1875 20.9993 20.4082 20.9075 20.5711 20.7446C20.734 20.5817 20.8258 20.361 20.8265 20.1307V9C20.8111 8.72851 20.691 8.47358 20.4914 8.28889L10.8265 1L1.16163 8.28889C0.962045 8.47358 0.841909 8.72851 0.826523 9V20.1307C0.827226 20.361 0.919042 20.5817 1.08192 20.7446C1.2448 20.9075 1.46551 20.9993 1.69586 21H19.9572Z"
        fill={bgColor}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
