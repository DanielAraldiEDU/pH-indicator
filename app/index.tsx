import React, { useEffect, useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

import { useFonts, Rowdies_400Regular } from "@expo-google-fonts/rowdies";
import SplashScreenUI from "@/components/SplashScreen";

SplashScreen.preventAutoHideAsync(); // Keep native splash screen visible

export default function App() {
  const [fontsLoaded] = useFonts({ Rowdies_400Regular });
  const [appReady, setAppReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setAppReady(true);
      await SplashScreen.hideAsync(); // Hide native splash once ready
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded) return null;

  return <SplashScreenUI />;
}
