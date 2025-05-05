import { TextProps as RNTextProps } from 'react-native';

export type TextVariant = 'heading' | 'body' | 'text';
export type TextColor = 'primary' | 'secondary' | 'background';

export interface TextProps extends RNTextProps {
  /**
   * @description Provides text style.
   *
   * @default 'body'
   */
  variant?: TextVariant;

  /**
   * @description Provides text color.
   *
   * @default 'secondary'
   */
  color?: TextColor;
}
