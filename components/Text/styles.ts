import { StyleSheet, TextStyle } from 'react-native';

import { theme } from '@/styles';
import { TextColor, TextVariant } from '@/@types';

interface MakeStylesProps {
  color: TextColor;
}

const { colors, fonts } = theme;
const fontFamily = fonts.families.rowdies.regular;

export const makeStyles = (props: MakeStylesProps) => {
  const { color } = props;

  return StyleSheet.create<Record<TextVariant, TextStyle>>({
    body: {
      fontFamily,
      fontSize: fonts.sizes.body,
      color: colors[color].main,
    },

    heading: {
      fontFamily,
      fontSize: fonts.sizes.heading,
      color: colors[color].main,
    },

    text: {
      fontFamily,
      fontSize: fonts.sizes.text,
      color: colors[color].main,
    },
  });
};
