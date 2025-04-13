import { theme } from '@/styles';
import { StyleSheet, View } from 'react-native';

export default function Home() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: '100%',

    padding: theme.spacings[5],
  },
});
