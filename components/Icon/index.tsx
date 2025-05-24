import { memo, ReactNode } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { IconName, IconProps } from '@/@types';
import { theme } from '@/styles';

function Icon(props: IconProps) {
  const {
    name,
    color = 'secondary',
    weight = 'regular',
    size = 'regular',
    customColor,
  } = props;

  const resolveColor = () => {
    const themeColor = theme.colors?.[color as keyof typeof theme.colors];
    if (typeof themeColor === 'string') return themeColor;
    if (typeof themeColor === 'object' && 'main' in themeColor)
      return themeColor.main;
    return color;
  };

  const commonIconProps = {
    color: customColor || resolveColor(),
    size: theme.spacings[size === 'regular' ? 4 : '2.5'],
    weight,
  };

  const icons: Record<IconName, ReactNode> = {
    heart: <FontAwesome name='heart' {...commonIconProps} />,
    copyright: <FontAwesome name='copyright' {...commonIconProps} />,
    flask: <FontAwesome name='flask' {...commonIconProps} />,
  };

  return icons[name];
}

export default memo(Icon);
