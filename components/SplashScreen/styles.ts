import { StyleSheet } from "react-native";
import { theme } from "@/styles";

const { colors } = theme;

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.main,
      justifyContent: "center",
      alignItems: "center",
    },
    logoWrapper: {
      width: 80,
      height: 80,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      textAlign: "center",
    },
  });
