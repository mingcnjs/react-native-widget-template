import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TabIconProps} from '../../types/icons';

export default function ChatIcon(props: TabIconProps) {
  const {stroke = '#1652F0'} = props;

  return (
    <Svg width="17" height="15" viewBox="0 0 17 15" fill="none">
      <Path
        d="M15.9232 6.86323C15.9234 6.16687 15.7864 5.4773 15.52 4.8339C15.2536 4.19051 14.8631 3.60592 14.3707 3.11351C13.8782 2.62111 13.2936 2.23055 12.6503 1.96415C12.0069 1.69775 11.3173 1.56073 10.6209 1.56091H6.37907C4.97281 1.56091 3.62414 2.11955 2.62976 3.11393C1.63539 4.10831 1.07675 5.45697 1.07675 6.86323C1.07675 8.2695 1.63539 9.61816 2.62976 10.6125C3.62414 11.6069 4.97281 12.1656 6.37907 12.1656H8.5L12.7419 14.2865V11.7173C13.687 11.3056 14.4915 10.627 15.0566 9.76481C15.6217 8.90257 15.9229 7.89416 15.9232 6.86323Z"
        stroke={stroke}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
