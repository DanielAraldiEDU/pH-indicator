export type LinearGradientColorsType = [string, string, ...string[]];
export type LinearGradientLocationsType = [number, number, ...number[]];

export interface LinearGradientBoxOnTouchProps {
  locationX: number;
  locationY: number;
}
export interface LinearGradientBoxProps {
  onTouch?(event: LinearGradientBoxOnTouchProps): void;
}
