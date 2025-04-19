import { theme } from '@/styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: theme.spacings[5],

    gap: theme.spacings[3],
  },

  titleRow: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: theme.spacings[13],
    height: theme.spacings[13],

    marginRight: theme.spacings[2],
  },

  text: {
    textAlign: 'center',
  },
});
