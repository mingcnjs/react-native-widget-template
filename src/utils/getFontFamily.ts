import {Fonts, FontWeights} from '../types/labels';

export default function getFontFamily(
  font: Fonts,
  weight: FontWeights = FontWeights.REGULAR,
) {
  return `${font}-${weight}`;
}
