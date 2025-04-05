import { memo, ReactNode } from 'react';
import {
  Copyright,
  Flask,
  Heart,
  IconProps as PRNIconProps,
} from 'phosphor-react-native';

import { IconName, IconProps } from '@/@types';

function Icon(props: IconProps) {
  const { name, color = 'secondary' } = props;

  const commonIconProps: PRNIconProps = {
    color,
    size: 16,
  };

  const icons: Record<IconName, ReactNode> = {
    heart: <Heart {...commonIconProps} />,
    copyright: <Copyright {...commonIconProps} />,
    flask: <Flask {...commonIconProps} />,
  };

  return icons[name];
}

export default memo(Icon);
