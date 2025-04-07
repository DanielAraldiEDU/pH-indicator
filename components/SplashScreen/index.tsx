import React, { memo } from "react";
import { View } from "react-native";

import Text from "@/components/Text";
import { makeStyles } from "./styles";
import { Image } from "react-native";
import logo from "@/assets/images/logo.png";

function SplashScreen() {
  const styles = makeStyles();

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={logo} style={styles.logoWrapper} />
      </View>
      <Text variant="heading" color="primary" style={styles.text}>
        Repolho Roxo
      </Text>
    </View>
  );
}

export default memo(SplashScreen);
