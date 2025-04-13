import { LinearGradient } from 'expo-linear-gradient';
import { memo } from 'react';
import { View } from 'react-native';

import { LinearGradientColorsType, LinearGradientLocationsType } from '@/@types';
import { theme } from '@/styles';
import { styles } from './styles';

function LinearGradientBox() {
  const colors = Object.values(theme.colors.pH) as LinearGradientColorsType;
  const locations = Object.values(theme.colors.pHStops) as LinearGradientLocationsType;

  return (
    <View style={styles.container}>
      <LinearGradient colors={colors} locations={locations} style={styles.content} />
    </View>
  );
}

export default memo(LinearGradientBox);
