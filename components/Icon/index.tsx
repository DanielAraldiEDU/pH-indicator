import { memo, ReactNode } from 'react';
import {
  Copyright,
  Flask,
  Heart,
  IconProps as PRNIconProps,
} from 'phosphor-react-native';

import { IconName, IconProps } from '@/@types';
import { theme } from '@/styles';

function Icon(props: IconProps) {
  const {
    name,
    color = 'secondary',
    weight = 'regular',
    size = 'regular',
  } = props;

  const resolveColor = () => {
    const themeColor = theme.colors?.[color as keyof typeof theme.colors];
    if (typeof themeColor === 'string') return themeColor;
    if (typeof themeColor === 'object' && 'main' in themeColor)
      return themeColor.main;
    return color;
  };

  const commonIconProps: PRNIconProps = {
    color: resolveColor(),
    size: theme.spacings[size === 'regular' ? 4 : '2.5'],
    weight,
  };

  const icons: Record<IconName, ReactNode> = {
    heart: <Heart {...commonIconProps} />,
    copyright: <Copyright {...commonIconProps} />,
    flask: <Flask {...commonIconProps} />,
  };

  return icons[name];
}

export default memo(Icon);
