import { LinearGradient } from 'expo-linear-gradient';
import { memo, useState } from 'react';
import { GestureResponderEvent, LayoutChangeEvent, View } from 'react-native';

import { MAX_PH } from '@/config';
import {
  LinearGradientBoxSizeProps,
  LinearGradientBoxLocationProps,
  LinearGradientColorsType,
  LinearGradientLocationsType,
} from '@/@types';
import { theme } from '@/styles';

import Tooltip from '../Tooltip';
import { styles } from './styles';

function LinearGradientBox() {
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [pHLevel, setPhLevel] = useState<number>(0);
  const [linearGradientBoxSize, setLinearGradientBoxSize] =
    useState<LinearGradientBoxSizeProps>({ width: 0, height: 0 });
  const [tooltipLocation, setTooltipLocation] =
    useState<LinearGradientBoxLocationProps>({ locationX: 0, locationY: 0 });

  const colors = Object.values(theme.colors.pH) as LinearGradientColorsType;
  const locations = Object.values(
    theme.colors.pHStops
  ) as LinearGradientLocationsType;

  function onTouchStart(event: GestureResponderEvent): void {
    const { locationX, locationY } = event.nativeEvent;

    const referencePhValue = (linearGradientBoxSize.height * 100) / locationY;
    const currentPhLevel = (MAX_PH * 100) / referencePhValue;

    setPhLevel(currentPhLevel);
    setTooltipLocation({
      locationX,
      locationY,
    });
    setIsTooltipVisible(true);
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

      {isTooltipVisible && <Tooltip pH={pHLevel} {...tooltipLocation} />}
    </View>
  );
}

export default memo(LinearGradientBox);
