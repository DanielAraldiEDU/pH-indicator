import { theme } from '@/styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    gap: theme.spacings[1],
  },

  text: {
    width: '100%',

    paddingHorizontal: theme.spacings[5],

    textAlign: 'center',
  },
});
