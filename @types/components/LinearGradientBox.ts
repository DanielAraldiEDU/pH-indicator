export type LinearGradientColorsType = [string, string, ...string[]];
export type LinearGradientLocationsType = [number, number, ...number[]];

export interface LinearGradientBoxLocationProps {
  /**
   * @description Provides the location X of the touch event.
   *
   * @default 0
   */
  locationX: number;

  /**
   * @description Provides the location Y of the touch event.
   *
   * @default 0
   */
  locationY: number;
}

export interface LinearGradientBoxSizeProps {
  /**
   * @description Provides the linear gradient box width.
   *
   * @default 0
   */
  width: number;

  /**
   * @description Provides the linear gradient box height.
   *
   * @default 0
   */
  height: number;
}
