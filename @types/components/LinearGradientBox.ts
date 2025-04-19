import { LayoutChangeEvent } from 'react-native';

export type LinearGradientColorsType = [string, string, ...string[]];
export type LinearGradientLocationsType = [number, number, ...number[]];

export interface LinearGradientBoxProps {
  onLayout?(event: LayoutChangeEvent): void;
}
