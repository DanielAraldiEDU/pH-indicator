import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Icon from "@/components/Icon";

function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Aplicativo desenvolvido pela Escola Politécnica - {"\n"}
        UNIVALI <Icon name="heart" weight="fill" />
      </Text>
      <Text style={styles.content}>
        Versão 1.0.0 - 2025 <Icon name="copyright" />
      </Text>
    </View>
  );
}

export default Footer;
