import { theme } from '@/styles';
import { StyleSheet } from 'react-native';

const { borders, spacings } = theme;

export const styles = StyleSheet.create({
  container: {
    width: spacings[12],
    height: spacings[8],

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: borders.radius.small,
  }
});
