import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { ACTIVE_OPACITY } from '@/config';
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

  const isHighlightText = ['13', '14'].includes(variant);

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      onPress={onPress}
      style={[styles.container, { backgroundColor: colors.pH[variant] }]}
    >
      <Text variant='body' color={isHighlightText ? 'primary' : 'background'}>
        {texts[variant]}
      </Text>
    </TouchableOpacity>
  );
}

export default memo(PhButton);
