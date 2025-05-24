import { ColorValue } from 'react-native';

import { LinearGradientBoxLocationProps } from './LinearGradientBox';

export interface TooltipProps extends LinearGradientBoxLocationProps {
  /**
   * @description Provides the pH level.
   *
   * @default 0
   */
  pH: number;

  /**
   * @description Provides the tooltip text color.
   *
   * @default '#C084FC'
   */
  textColor?: ColorValue;
}

export interface TooltipLayoutProps {
  /**
   * @description Provides the tooltip layout.
   *
   * @default 0
   */
  width: number;

  /**
   * @description Provides the tooltip layout.
   *
   * @default 0
   */
  height: number;
}
