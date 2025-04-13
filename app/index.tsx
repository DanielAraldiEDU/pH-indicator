import { ScrollView, StyleSheet, View } from 'react-native';

import { theme } from '@/styles';
import { LinearGradientBox, PhButton } from '../components';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Divider variant='header'/>
      <View style={styles.content}>
        <View style={styles.phButtonsContainer}>
          <View style={styles.phButton}>
            <PhButton variant='0' />
            <View style={styles.phButtonLine} />
          </View>
          <View style={styles.phButton}>
            <PhButton variant='7' />
            <View style={styles.phButtonLine} />
          </View>
          <View style={styles.phButton}>
            <PhButton variant='14' />
            <View style={styles.phButtonLine} />
          </View>
        </View>
        <View style={styles.linearGradientContainer}>
          <LinearGradientBox />
        </View>
      </View>
      <Divider variant='footer'/>
      <Footer />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: '100%',

    padding: theme.spacings[5],
  },
  
  content: {
    flexDirection: 'row',
    height: 576, // TODO: change height approach
    gap: theme.spacings['1.5']
  },

  phButtonsContainer: {
    width: theme.spacings[14],
    justifyContent: 'space-between',
  },
  
  phButton: {
    flexDirection: 'row',
    gap: theme.spacings['1.5'],
    alignItems: 'center',
  },

  phButtonLine: {
    width: theme.spacings[2],
    height: 1,
    backgroundColor: theme.colors.primary.main,
  },

  linearGradientContainer: {
    flexGrow: 1,
  },
});
