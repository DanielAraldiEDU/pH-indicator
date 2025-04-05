import { memo } from 'react';
import { Pressable } from 'react-native';

import { styles } from './styles';
import { PhButtonProps, PhVariant } from '@/@types';
import Text from '../Text';

function PhButton(props: PhButtonProps) {
  const { variant, onPress } = props;

  const texts: Record<PhVariant, string> = {
    '0': '0',
    '7': '7',
    '14': '14',
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text variant='heading'>{texts[variant]}</Text>
    </Pressable>
  );
}

export default memo(PhButton);
