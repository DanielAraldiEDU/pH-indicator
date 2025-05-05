import { memo } from 'react';
import { Pressable } from 'react-native';

import { PhButtonProps, PhVariant } from '@/@types';
import Text from '../Text';
import { styles } from './styles';

function PhButton(props: PhButtonProps) {
  const { variant, onPress } = props;

  const texts: Record<PhVariant, string> = {
    '1': '0 - 1',
    '2': '2',
    '5': '5',
    '7': '7',
    '9': '9',
    '11': '11',
    '13': '13',
    '14': '14',
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.content} variant='heading' color='primary' >
        {texts[variant]}
      </Text>
    </Pressable>
  );
}

export default memo(PhButton);
