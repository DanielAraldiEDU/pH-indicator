import { memo } from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.titleRow}>
        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.title}>Indicador de pH</Text>
      </View>
      <Text style={styles.subtitle}>
        Clique na paleta de cores do pH {"\n"}e descubra seu nível! 🎨💧
      </Text>
    </View>
  );
}

export default memo(Header);
