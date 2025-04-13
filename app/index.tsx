import { ScrollView, StyleSheet, View } from 'react-native';

import { theme } from '@/styles';
import { LinearGradientBox, PhButton } from '../components';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return <ScrollView style={styles.container}>
    <Header />
    <Divider variant='header'/>
    <View style={{ flexDirection: 'row', height: 700, gap: 6 }}>
      <View style={{ width: '15%', justifyContent: 'space-between' }}>
        <PhButton variant='0' />
        <PhButton variant='7' />
        <PhButton variant='14' />
      </View>
      <View style={{ flexGrow: 1 }}>
        <LinearGradientBox />
      </View>
    </View>
    <Divider variant='footer'/>
    <Footer />
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: '100%',

    padding: theme.spacings[5],
  },
});
