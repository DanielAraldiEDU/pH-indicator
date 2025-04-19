export type IconName = 'heart' | 'copyright' | 'flask';
export type IconColor = 'primary' | 'secondary';
export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill';
export type IconSize = 'thin' | 'regular';

export interface IconProps {
  /**
   * @description Provides icon name.
   */
  name: IconName;

  /**
   * @description Provides icon color.
   *
   * @default 'secondary'
   */
  color?: IconColor;

  /**
   * @description Provides icon weight.
   *
   * @default 'regular'
   */
  weight?: IconWeight;

  /**
   * @description Provides icon size.
   *
   * @default 'regular'
   */
  size?: IconSize;
}
