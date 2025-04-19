import { memo } from 'react';
import { View } from 'react-native';

import { DividerProps } from '../../@types';
import { styles } from './styles';

function Divider(props: DividerProps) {
  const { variant = 'default' } = props;

  return <View style={styles[variant]} />;
}

export default memo(Divider);
