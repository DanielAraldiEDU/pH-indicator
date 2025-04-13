import { StyleSheet, ViewStyle } from "react-native";
import { theme } from "../../styles";

const defaultStyle: ViewStyle = {
    width: '100%',
    height: 1,

    backgroundColor: theme.colors.secondary.main,

    marginTop: theme.spacings[4],
    marginBottom: theme.spacings[4],
};

export const styles = StyleSheet.create({
  default: defaultStyle,

  header: {
    ...defaultStyle,
    marginTop: theme.spacings[3],
    marginBottom: theme.spacings[5],
  },

  footer: {
    ...defaultStyle,
    marginTop: theme.spacings[5],
    marginBottom: theme.spacings[3],
  }
});
