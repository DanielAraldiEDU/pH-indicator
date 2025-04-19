import { theme } from '@/styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    shadowColor: theme.colors.primary.main,
    shadowOffset: {
      width: theme.spacings[1],
      height: theme.spacings[1],
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,

    elevation: theme.spacings[2],
  },

  content: {
    width: '100%',
    height: '100%',

    borderRadius: theme.borders.radius.small,
  },
});
