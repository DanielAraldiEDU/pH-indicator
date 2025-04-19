import { LinearGradient } from 'expo-linear-gradient';
import { memo } from 'react';
import { GestureResponderEvent, View } from 'react-native';

import {
  LinearGradientBoxProps,
  LinearGradientColorsType,
  LinearGradientLocationsType,
} from '@/@types';
import { theme } from '@/styles';
import { styles } from './styles';

function LinearGradientBox(props: LinearGradientBoxProps) {
  const { onTouch } = props;

  const colors = Object.values(theme.colors.pH) as LinearGradientColorsType;
  const locations = Object.values(
    theme.colors.pHStops
  ) as LinearGradientLocationsType;

  function onTouchStart(event: GestureResponderEvent): void {
    const { locationX, locationY } = event.nativeEvent;

    onTouch?.({
      locationX,
      locationY,
    });
  }

  return (
    <View style={styles.container} onTouchStart={onTouchStart}>
      <LinearGradient
        colors={colors}
        locations={locations}
        style={styles.content}
      />
    </View>
  );
}

export default memo(LinearGradientBox);
