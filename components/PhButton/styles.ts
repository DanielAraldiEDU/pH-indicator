import { theme } from '@/styles';
import { StyleSheet } from 'react-native';

const { borders, colors, spacings } = theme;

export const styles = StyleSheet.create({
  container: {
    width: spacings[10],
    height: spacings[10],

    justifyContent: 'center',
    alignItems: 'center',

    borderColor: colors.primary.main,
    borderWidth: borders.widths.small,
    borderRadius: borders.radius.full,

    backgroundColor: colors.transparent.main,
  },
  content: {
    lineHeight: theme.spacings[10]
  }
});
