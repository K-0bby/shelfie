import { ActivityIndicator, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";
import ThemedView from "./themedview";

const ThemeLoader = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={{flex: 1, jusstifyContent: "center", alignItems: "center"}} theme={theme}>
      <ActivityIndicator size="large" color={theme.text} />
    </ThemedView>
  );
};
export default ThemeLoader;
