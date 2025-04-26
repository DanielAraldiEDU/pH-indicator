import { LinearGradientBoxLocationProps } from './LinearGradientBox';

export interface TooltipProps extends LinearGradientBoxLocationProps {
  /**
   * @description Provides the pH level.
   *
   * @default 0
   */
  pH: number;
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
