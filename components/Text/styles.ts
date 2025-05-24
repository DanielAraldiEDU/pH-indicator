import { ColorValue, StyleSheet, TextStyle } from 'react-native';

import { TextColor, TextVariant } from '@/@types';
import { theme } from '@/styles';

interface MakeStylesProps {
  color: TextColor;
  customColor?: ColorValue;
}

const fontFamily = theme.fonts.families.rowdies.regular;

export const makeStyles = (props: MakeStylesProps) => {
  const { color, customColor } = props;

  return StyleSheet.create<Record<TextVariant, TextStyle>>({
    body: {
      fontFamily,
      fontSize: theme.fonts.sizes.body,
      color: customColor || theme.colors[color].main,
    },

    heading: {
      fontFamily,
      fontSize: theme.fonts.sizes.heading,
      color: customColor || theme.colors[color].main,
    },

    text: {
      fontFamily,
      fontSize: theme.fonts.sizes.text,
      color: customColor || theme.colors[color].main,
    },
  });
};
