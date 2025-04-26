import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';

import { Text } from '@/components';
import { theme } from '@/styles';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.warning}>
        <Text variant='heading' color='primary'>
          Oops!
        </Text>

        <Text color='secondary'>
          Parece que você se perdeu por aqui!{'\n'}Não se preocupe, basta clicar
          no botão abaixo para voltar!
        </Text>
      </View>

      <Link replace asChild href='/+not-found'>
        <TouchableOpacity style={styles.button} activeOpacity={0.9}>
          <Text color='primary'>Voltar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: '100%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    padding: theme.spacings[5],
    gap: theme.spacings[10],

    backgroundColor: theme.colors.background.main,
  },

  warning: {
    width: '100%',

    alignItems: 'center',

    gap: theme.spacings[4],
  },

  button: {
    width: '100%',
    height: theme.spacings[16],

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: theme.borders.radius.small,
    borderWidth: theme.borders.widths.small,
    borderColor: theme.colors.primary.main,

    backgroundColor: theme.colors.transparent.main,

    ...theme.shadow.default,
  },
});
