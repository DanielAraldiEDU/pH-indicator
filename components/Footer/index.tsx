import { memo } from 'react';
import { View } from 'react-native';

import { version } from '@/config';
import Icon from '../Icon';
import Text from '../Text';
import { styles } from './styles';

function Footer() {
  return (
    <View style={styles.container}>
      <Text variant='text' style={styles.text}>
        Aplicativo desenvolvido pela Escola Politécnica - UNIVALI{' '}
        <Icon name='heart' weight='fill' size='thin' />
      </Text>

      <Text variant='text' style={styles.text}>
        Versão {version} - 2025 <Icon name='copyright' size='thin' />
      </Text>
    </View>
  );
}

export default memo(Footer);
