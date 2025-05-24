import {
  InterpolatedColorProps,
  RgbColorProps,
  ParseRgbToHexProps,
} from '@/@types';

export function parseHexColor(color: string): RgbColorProps | null {
  const HEXADECIMAL_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

  if (color.match(HEXADECIMAL_REGEX)) {
    const parsed = HEXADECIMAL_REGEX.exec(color);

    if (parsed) {
      const [, red, green, blue] = parsed;

      return {
        red: Number.parseInt(red, 16),
        green: Number.parseInt(green, 16),
        blue: Number.parseInt(blue, 16),
      };
    }
  }

  return null;
}

export function interpolateColor(
  firstColor: RgbColorProps,
  secondColor: RgbColorProps,
  ratio: number
): InterpolatedColorProps {
  const r = 1 - ratio;
  const red = Math.round(firstColor.red * r + secondColor.red * ratio);
  const green = Math.round(firstColor.green * r + secondColor.green * ratio);
  const blue = Math.round(firstColor.blue * r + secondColor.blue * ratio);

  return { red, green, blue };
}

export function parseRgbToHex(rgb: ParseRgbToHexProps): string {
  return `#${toHex(rgb.red)}${toHex(rgb.green)}${toHex(rgb.blue)}`;
}

export function toHex(color: number): string {
  const hex = color.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}
