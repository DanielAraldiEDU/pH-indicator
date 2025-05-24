import { memo } from 'react';
import { Text as RNText } from 'react-native';

import { TextProps } from '@/@types';
import { makeStyles } from './styles';

function Text(props: TextProps) {
  const {
    variant = 'body',
    color = 'secondary',
    customColor,
    style,
    ...rest
  } = props;

  const textStyles = makeStyles({ color })[variant];

  return <RNText {...rest} style={[textStyles, style]} />;
}

export default memo(Text);
