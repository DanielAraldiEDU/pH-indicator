import { LinearGradient } from 'expo-linear-gradient';
import { memo, useEffect, useMemo, useState } from 'react';
import { GestureResponderEvent, LayoutChangeEvent, View } from 'react-native';

import { MAX_PH } from '@/config';
import {
  LinearGradientBoxSizeProps,
  LinearGradientBoxLocationProps,
  LinearGradientColorsType,
  LinearGradientLocationsType,
  LinearGradientBoxProps,
} from '@/@types';
import { theme } from '@/styles';

import Tooltip from '../Tooltip';
import { styles } from './styles';

function LinearGradientBox(props: LinearGradientBoxProps) {
  const { phLevel: forcePhLevel = null, onPressPhLevel } = props;

  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [pHLevel, setPhLevel] = useState<number>(0);
  const [linearGradientBoxSize, setLinearGradientBoxSize] =
    useState<LinearGradientBoxSizeProps>({ width: 0, height: 0 });
  const [tooltipLocation, setTooltipLocation] =
    useState<LinearGradientBoxLocationProps>({ locationX: 0, locationY: 0 });

  function onTouchStart(event: GestureResponderEvent): void {
    const { locationX, locationY } = event.nativeEvent;

    const { height: linearGradientBoxHeight } = linearGradientBoxSize;

    const firstStop = linearGradientBoxHeight * 0.05;
    const lastStop = linearGradientBoxHeight * 0.95;

    if (locationY <= firstStop) {
        setTooltipLocation({
            locationX,
            locationY: firstStop,
        });
        setPhLevel(1);
        setIsTooltipVisible(true);
        return;
    }
    if (locationY >= lastStop) {
        setTooltipLocation({
            locationX,
            locationY: lastStop,
        });
        setPhLevel(14);
        setIsTooltipVisible(true);
        return;
    }

    const currentPhLevel = locationY
      ? (locationY - firstStop) * (MAX_PH - 1) / (linearGradientBoxHeight * 0.9) + 1
      : 0;

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

  const linearGradientProps = useMemo(() => {
    const colors = Object.values(theme.colors.pH) as LinearGradientColorsType;
    const locations = Object.values(
      theme.colors.pHStops
    ) as LinearGradientLocationsType;

    return { colors, locations };
  }, []);

  useEffect(() => {
    if (forcePhLevel !== null) {
      const locationsY: Record<number, number> = {
        0: 0.001,
        7: linearGradientBoxSize.height / 2,
        14: linearGradientBoxSize.height,
      };

      setPhLevel(forcePhLevel);
      setTooltipLocation({
        locationX: linearGradientBoxSize.width / 2,
        locationY: locationsY[forcePhLevel] || linearGradientBoxSize.height / 2,
      });
      setIsTooltipVisible(true);
      onPressPhLevel?.();
    }
  }, [forcePhLevel]);

  return (
    <View
      style={styles.container}
      onLayout={onLayout}
      onTouchStart={onTouchStart}
    >
      <LinearGradient style={styles.content} {...linearGradientProps} />

      {isTooltipVisible && <Tooltip pH={pHLevel} {...tooltipLocation} />}
    </View>
  );
}

export default memo(LinearGradientBox);
