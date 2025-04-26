import { LinearGradient } from 'expo-linear-gradient';
import { memo, useState } from 'react';
import { GestureResponderEvent, LayoutChangeEvent, View } from 'react-native';

import {
  LinearGradientBoxSizeProps,
  LinearGradientBoxTouchStartProps,
  LinearGradientColorsType,
  LinearGradientLocationsType,
} from '@/@types';
import { theme } from '@/styles';
import { styles } from './styles';

function LinearGradientBox() {
  const [linearGradientBoxSize, setLinearGradientBoxSize] =
    useState<LinearGradientBoxSizeProps>({ width: 0, height: 0 });
  const [tooltipPosition, setTooltipPosition] =
    useState<LinearGradientBoxTouchStartProps>({ locationX: 0, locationY: 0 });

  const colors = Object.values(theme.colors.pH) as LinearGradientColorsType;
  const locations = Object.values(
    theme.colors.pHStops
  ) as LinearGradientLocationsType;

  function onTouchStart(event: GestureResponderEvent): void {
    const { locationX, locationY } = event.nativeEvent;

    setTooltipPosition({
      locationX,
      locationY,
    });
  }

  function onLayout(event: LayoutChangeEvent): void {
    setLinearGradientBoxSize(event.nativeEvent.layout);
  }

  return (
    <View
      style={styles.container}
      onLayout={onLayout}
      onTouchStart={onTouchStart}
    >
      <LinearGradient
        colors={colors}
        locations={locations}
        style={styles.content}
      />
    </View>
  );
}

export default memo(LinearGradientBox);
