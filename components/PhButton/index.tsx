import { memo, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import { ACTIVE_OPACITY } from '@/config';
import { PhButtonProps, PhVariant } from '@/@types';
import Text from '../Text';
import { makeStyles } from './styles';

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
  const textColor = isHighlightText ? 'primary' : 'background';

  const styles = useMemo(() => makeStyles({ variant }), [variant]);

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      onPress={onPress}
      style={styles.container}
    >
      <Text variant='body' color={textColor}>
        {texts[variant]}
      </Text>
    </TouchableOpacity>
  );
}

export default memo(PhButton);
