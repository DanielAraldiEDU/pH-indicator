export type IconName = 'heart' | 'copyright' | 'flask';
export type IconColor = 'primary' | 'secondary';

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
}
