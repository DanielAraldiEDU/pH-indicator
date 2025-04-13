import { memo } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '@/styles';
import { LinearGradientColorsType } from '@/@types';
import { styles } from './styles';

function LinearGradientBox() {
  const colors = Object.values(theme.colors.pH) as LinearGradientColorsType;

  return (
    <View style={styles.container}>
      <LinearGradient colors={colors} style={styles.content} />
    </View>
  );
}

export default memo(LinearGradientBox);
