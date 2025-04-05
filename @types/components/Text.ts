import { TextProps as RNTextProps } from 'react-native';

export type TextVariant = 'heading' | 'body' | 'text';

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
}
