import { memo } from 'react';
import { Pressable } from 'react-native';

import { PhButtonProps, PhVariant } from '@/@types';
import { theme } from '../../styles';
import Text from '../Text';
import { styles } from './styles';

const { colors } = theme;

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
    <Pressable onPress={onPress} style={[styles.container, { backgroundColor: colors.pH[variant] } ]}>
      <Text variant='body' color={['13', '14'].includes(variant) ? 'primary' : 'background'}>
        {texts[variant]}
      </Text>
    </Pressable>
  );
}

export default memo(PhButton);
