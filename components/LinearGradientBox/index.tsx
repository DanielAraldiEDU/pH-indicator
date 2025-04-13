import { LinearGradient } from 'expo-linear-gradient';
import { memo } from 'react';
import { View } from 'react-native';

import { LinearGradientColorsType } from '@/@types';
import { theme } from '@/styles';
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
