export type PhVariant = '1' | '2' | '5' | '7' | '9' | '11' | '13' | '14';

export interface PhButtonProps {
  /**
   * @description Provides the text to be displayed in the button.
   */
  variant: PhVariant;

  /**
   * @description Called when the button is pressed.
   *
   * @default undefined
   */
  onPress?(): void;
}
