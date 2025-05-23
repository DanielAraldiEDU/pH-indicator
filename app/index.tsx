import { useCallback, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { usePh } from '@/hooks';
import { theme } from '@/styles';
import {
  Divider,
  Footer,
  Header,
  LinearGradientBox,
  PhButton,
  PhButtonLine,
} from '../components';
import { DimensionPhStop, PhMetric, PhVariant } from '@/@types';

export default function Home() {
  const [linearGradientHeight, setLinearGradientHeight] = useState<number>(0);

  const { setPh, setPhColor } = usePh();

  const forcePhLevel = useCallback(
    (metric: PhMetric) => {
      setPh(metric);
      setPhColor(theme.colors.pH[metric]);
    },
    [setPh, setPhColor]
  );

  const pHLevels = useMemo(() => {
    const spacing = theme.spacings[4];

    const pHDimensions: DimensionPhStop[] = [2, 5, 7, 9, 11, 13];
    const pHPositionsByLevel = pHDimensions.map(
      pH => linearGradientHeight * theme.dimensions.pHStops[pH] - spacing
    );

    return pHPositionsByLevel.map((position, index) => ({
      value: pHDimensions[index].toString() as PhVariant,
      top: position,
    }));
  }, [linearGradientHeight]);

  const renderPhButtons = useMemo(
    () =>
      pHLevels.map(({ value, top }) => (
        <View key={value} style={[styles.phButtonContent, { top }]}>
          <PhButton
            variant={value}
            onPress={() => {
              const pH = Number.parseInt(value) as PhMetric;
              forcePhLevel(pH);
            }}
          />

          <PhButtonLine />
        </View>
      )),
    [pHLevels]
  );

  return (
    <View style={styles.container}>
      <Header />

      <Divider variant='header' />

      <View style={styles.content}>
        <View style={styles.phButtonsContainer}>
          <View style={[styles.phButtonContent, { top: 0 }]}>
            <PhButton variant='1' onPress={() => forcePhLevel(1)} />

            <PhButtonLine />
          </View>

          {renderPhButtons}

          <View style={[styles.phButtonContent, { bottom: 0 }]}>
            <PhButton variant='14' onPress={() => forcePhLevel(14)} />

            <PhButtonLine />
          </View>
        </View>

        <LinearGradientBox onHeightMeasured={setLinearGradientHeight} />
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
