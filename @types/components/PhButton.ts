export type PhVariant = '0' | '7' | '14';

export interface PhButtonProps {
  variant: PhVariant;
  onPress?(): void;
}
