export interface RgbColorProps {
  red: number;
  green: number;
  blue: number;
}

export interface InterpolatedColorProps extends RgbColorProps {}

export interface ParseRgbToHexProps extends RgbColorProps {}
