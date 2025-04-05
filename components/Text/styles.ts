import { StyleSheet, TextStyle } from 'react-native';

import { theme } from '@/styles';
import { TextVariant } from '@/@types';

const { colors, fonts } = theme;
const fontFamily = fonts.families.rowdies.regular;

export const styles = StyleSheet.create<Record<TextVariant, TextStyle>>({
  body: {
    fontFamily,
    fontSize: fonts.sizes.body,
    color: colors.secondary.main,
  },

  heading: {
    fontFamily,
    fontSize: fonts.sizes.heading,
    color: colors.primary.main,
  },

  text: {
    fontFamily,
    fontSize: fonts.sizes.text,
    color: colors.secondary.main,
  },
});
