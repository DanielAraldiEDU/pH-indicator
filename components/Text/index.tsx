import { memo } from 'react';
import { Text as RNText } from 'react-native';

import { TextProps } from '@/@types';
import { styles } from './styles';

function Text(props: TextProps) {
  const { variant = 'body', style, ...rest } = props;

  return <RNText {...rest} style={[styles[variant], style]} />;
}

export default memo(Text);
