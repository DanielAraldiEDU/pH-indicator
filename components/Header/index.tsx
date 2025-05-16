import { memo } from 'react';
import { View, Image } from 'react-native';

import { LOGO } from '@/config';
import Text from '../Text';
import { styles } from './styles';

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.titleRow}>
        <Image source={LOGO} style={styles.image} resizeMode='contain' />

        <Text variant='heading' color='primary' style={styles.text}>
          pH Repolho Roxo
        </Text>
      </View>

      <Text style={styles.text}>
        Clique na paleta de cores referente ao indicador de repolho roxo e
        descubra o pH da sua amostra! 🎨
      </Text>
    </View>
  );
}

export default memo(Header);
