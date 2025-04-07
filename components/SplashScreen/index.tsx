import React, { memo } from "react";
import { View } from "react-native";

import Text from "@/components/Text"; // assuming this is your shared custom Text component
import { makeStyles } from "./styles";
import Logo from "../Icon/logo";

function SplashScreen() {
  const styles = makeStyles();

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo />
      </View>
      <Text variant="heading" color="primary" style={styles.text}>
        Repolho Roxo
      </Text>
    </View>
  );
}

export default memo(SplashScreen);
