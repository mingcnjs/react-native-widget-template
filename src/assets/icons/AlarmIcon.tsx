import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TabIconProps} from '../../types/icons';

export default function AlarmIcon(props: TabIconProps) {
  const {stroke = '#1652F0'} = props;

  return (
    <Svg width="17" height="18" viewBox="0 0 17 18" fill="none">
      <Path
        d="M7.1296 15.6044C7.21663 15.9009 7.39735 16.1612 7.6447 16.3464C7.89205 16.5316 8.19273 16.6317 8.50171 16.6317C8.8107 16.6317 9.11138 16.5316 9.35873 16.3464C9.60608 16.1612 9.7868 15.9009 9.87383 15.6044"
        stroke={stroke}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.5 2.75692V1.21521"
        stroke={stroke}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.5 2.7569C9.86295 2.7569 11.1701 3.29833 12.1338 4.26208C13.0976 5.22583 13.639 6.53296 13.639 7.89591C13.639 12.7238 14.6668 13.5488 14.6668 13.5488H2.33318C2.33318 13.5488 3.36098 12.236 3.36098 7.89591C3.36098 6.53296 3.90241 5.22583 4.86617 4.26208C5.82992 3.29833 7.13705 2.7569 8.5 2.7569V2.7569Z"
        stroke={stroke}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
