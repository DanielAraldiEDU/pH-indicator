import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '@/styles';
import {
  LinearGradientBox,
  PhButton,
  Divider,
  Footer,
  Header,
  PhButtonLine,
} from '../components';

export default function Home() {
  const [forcePhLevel, setForcePhLevel] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <Header />

      <Divider variant='header' />

      <View style={styles.content}>
        <View style={styles.phButtonsContainer}>
          <View style={styles.phButtonContent}>
            <PhButton variant='0' onPress={() => setForcePhLevel(0)} />

            <PhButtonLine />
          </View>

          <View style={styles.phButtonContent}>
            <PhButton variant='7' onPress={() => setForcePhLevel(7)} />

            <PhButtonLine />
          </View>

          <View style={styles.phButtonContent}>
            <PhButton variant='14' onPress={() => setForcePhLevel(14)} />

            <PhButtonLine />
          </View>
        </View>

        <LinearGradientBox phLevel={forcePhLevel} />
      </View>

      <Divider variant='footer' />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    padding: theme.spacings[5],

    backgroundColor: theme.colors.background.main,
  },

  content: {
    flex: 1,

    flexDirection: 'row',

    height: '100%',

    gap: theme.spacings['1.5'],
  },

  phButtonsContainer: {
    width: theme.spacings[14],

    justifyContent: 'space-between',
  },

  phButtonContent: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: theme.spacings['1.5'],
  },
});
