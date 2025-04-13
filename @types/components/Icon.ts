export type IconName = "heart" | "copyright" | "flask";
export type IconColor = "primary" | "secondary";
export type IconWeight = "thin" | "light" | "regular" | "bold" | "fill";

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
}
