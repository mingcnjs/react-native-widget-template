import {StyleSheet, TextProps} from 'react-native';

export enum Fonts {
  NOTO = 'NotoSans',
}

export enum FontWeights {
  BOLD = 'Bold',
  SEMI_BOLD = 'SemiBold',
  MEDIUM = 'Medium',
  REGULAR = 'Regular',
}

export enum FontDimensions {
  TITLE = 'TITLE',
  TITLE1 = 'TITLE1',
  LABEL = 'LABEL',
  LABEL1 = 'LABEL1',
}

export const fontDimensionStyles = StyleSheet.create({
  TITLE: {fontSize: 18, lineHeight: 24},
  TITLE1: {fontSize: 14, lineHeight: 16},
  LABEL: {fontSize: 11, lineHeight: 24},
  LABEL1: {fontSize: 11, lineHeight: 16},
});

export type BaseTextProps = TextProps & {
  font: Fonts;
  fontWeight?: FontWeights;
  color?: string;
  fontDimensions?: FontDimensions;
};

export type CustomTextProps = Omit<BaseTextProps, 'font'> & {
  fontDimensions?: FontDimensions;
};
