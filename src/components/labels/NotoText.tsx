import React, {FC} from 'react';
import {CustomTextProps, Fonts} from '../../types/labels';
import CustomText from './CustomText';

const NotoText: FC<CustomTextProps> = props => {
  return <CustomText {...props} font={Fonts.NOTO} />;
};

export default NotoText;
