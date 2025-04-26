import { theme } from '@/styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',

    flex: 1,

    ...theme.shadow.default,
  },

  content: {
    width: '100%',
    height: '100%',

    borderRadius: theme.borders.radius.small,
  },
});
