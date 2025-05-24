import { StyleSheet } from 'react-native';
import { PhVariant } from '@/@types';
import { theme } from '@/styles';

interface MakeStylesProps {
  variant: PhVariant;
}

export const makeStyles = (props: MakeStylesProps) => {
  const { variant } = props;

  return StyleSheet.create({
    container: {
      width: theme.spacings[12],
      height: theme.spacings[8],

      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: theme.borders.radius.small,

      backgroundColor: theme.colors.pH[variant],
    },
  });
};
