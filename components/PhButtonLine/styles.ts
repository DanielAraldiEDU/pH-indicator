import { StyleSheet } from 'react-native';

import { theme } from '@/styles';

export const styles = StyleSheet.create({
  container: {
    width: theme.spacings[2],
    height: 1,

    backgroundColor: theme.colors.primary.main,
  },
});
