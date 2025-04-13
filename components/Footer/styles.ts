import { theme } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: theme.spacings[5],
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: theme.fonts.sizes.text,
    fontFamily: theme.fonts.families.rowdies.regular,
    color: theme.colors.secondary.main,
    marginBottom: 4,
  },
});
