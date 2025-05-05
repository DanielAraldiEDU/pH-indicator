import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '@/styles';
import {
  Divider,
  Footer,
  Header,
  LinearGradientBox,
  PhButton,
  PhButtonLine,
} from '../components';

export default function Home() {
  const [forcePhLevel, setForcePhLevel] = useState<number | null>(null);

  const [linearGradientHeight, setLinearGradientHeight] = useState<number>(0);


  const centerPhLevels = useMemo(() => [
    { value: '2', top: linearGradientHeight * 0.12 - theme.spacings[4]}, 
    { value: '5', top: linearGradientHeight * 0.33 - theme.spacings[4]}, 
    { value: '7', top: linearGradientHeight * 0.46 - theme.spacings[4]}, 
    { value: '9', top: linearGradientHeight * 0.6 - theme.spacings[4]}, 
    { value: '11', top: linearGradientHeight * 0.74 - theme.spacings[4]},
    { value: '13', top: linearGradientHeight * 0.88 - theme.spacings[4]},
  ] as const, [linearGradientHeight]);

  return (
    <View style={styles.container}>
      <Header />

      <Divider variant='header' />

      <View style={styles.content}>
        <View style={styles.phButtonsContainer}>
          <View style={[styles.phButtonContent, { top: 0 }]}>
            <PhButton variant='1' onPress={() => setForcePhLevel(1)} />

            <PhButtonLine />
          </View>
          {centerPhLevels.map(({ value, top }) => (
            <View key={value} style={[styles.phButtonContent, { top } ]}>
              <PhButton variant={value} onPress={() => setForcePhLevel(Number(value))} />

              <PhButtonLine />
            </View>
          ))}
          <View style={[styles.phButtonContent, { bottom: 0 }]}>
            <PhButton variant='14' onPress={() => setForcePhLevel(14)} />

            <PhButtonLine />
          </View>
        </View>

        <LinearGradientBox
          phLevel={forcePhLevel}
          onPressPhLevel={() => setForcePhLevel(null)}
          onHeightMeasured={setLinearGradientHeight}
        />
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
    position: 'relative',

    flex: 1,
    flexDirection: 'row',

    height: '100%',

    gap: theme.spacings['2.5'],
  },

  phButtonsContainer: {
    width: theme.spacings[16],

    position: 'relative',
  },

  phButtonContent: {
    position: 'absolute',

    flexDirection: 'row',

    alignItems: 'center',

    gap: theme.spacings['2.5'],
  },
});
