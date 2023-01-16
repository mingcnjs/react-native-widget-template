import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  BaseTextProps,
  FontDimensions,
  fontDimensionStyles,
  Fonts,
  FontWeights,
} from '../../types/labels';
import {layoutColors} from '../../constants/colors';
import getFontFamily from '../../utils/getFontFamily';

const CustomText: FC<BaseTextProps & {font: Fonts}> = props => {
  const {
    children,
    font,
    fontWeight = FontWeights.REGULAR,
    fontDimensions = FontDimensions.TITLE1,
    color = layoutColors.white,
    style,
    ...textProps
  } = props;

  const styles = StyleSheet.flatten([
    fontDimensionStyles[fontDimensions],
    {color, fontFamily: getFontFamily(font, fontWeight)},
    style,
  ]);

  return (
    <Text {...textProps} style={styles}>
      {children}
    </Text>
  );
};

export default CustomText;
