import { theme } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    paddingTop: theme.spacings[10],
    paddingHorizontal: theme.spacings[5],
    alignItems: "center",
    justifyContent: "center",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: theme.spacings[4],
  },
  title: {
    fontSize: theme.fonts.sizes.heading,
    fontFamily: theme.fonts.families.rowdies.regular,
    color: theme.colors.primary.main,
    textAlign: "center",
  },
  subtitle: {
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.families.rowdies.regular,
    color: theme.colors.secondary.main,
    textAlign: "center",
    marginTop: theme.spacings[2],
  },
});
