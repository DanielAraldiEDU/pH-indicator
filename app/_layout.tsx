import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Rowdies_400Regular } from '@expo-google-fonts/rowdies';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { theme } from '@/styles';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoaded, error] = useFonts({
    Rowdies_400Regular: Rowdies_400Regular,
  });

  const { colors } = theme;

  useEffect(() => {
    if (isLoaded || error) SplashScreen.hideAsync();
  }, [isLoaded, error]);

  if (!isLoaded && !error) return null;

  return (
    <SafeAreaProvider>
      <StatusBar
        style='dark'
        backgroundColor={colors.background.main}
        translucent
        networkActivityIndicatorVisible
      />

      <SafeAreaView style={styles.container}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='index' />
          <Stack.Screen name='+not-found' />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.background.main,
  },
});
