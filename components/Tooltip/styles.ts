import { StyleSheet, Platform } from 'react-native';

import { theme } from '@/styles';

interface MakeStylesProps {
  width: number;
}

export const makeStyles = (props: MakeStylesProps) => {
  const { width } = props;

  const isAndroid = Platform.OS === 'android';

  return StyleSheet.create({
    container: {
      zIndex: 99,
      position: 'absolute',

      width: 'auto',
      height: 'auto',

      paddingHorizontal: theme.spacings[3],
      paddingVertical: theme.spacings[2],

      borderRadius: theme.borders.radius.small,

      backgroundColor: theme.colors.background.main,

      ...(isAndroid && {
        shadowColor: theme.colors.primary.main,
        shadowOffset: {
          width: theme.spacings[1],
          height: theme.spacings[1],
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.65,

        elevation: theme.spacings[2],
      }),
    },

    content: {
      flexDirection: 'row',

      justifyContent: 'center',
      alignItems: 'center',

      gap: theme.spacings[1],
    },

    triangle: {
      zIndex: 9999,
      position: 'absolute',

      left: width / 2 - theme.spacings['1.5'],
      bottom: -theme.spacings[1],

      width: theme.spacings[3],
      height: theme.spacings[3],

      transform: [{ rotate: '45deg' }],

      backgroundColor: theme.colors.background.main,
    },
  });
};
