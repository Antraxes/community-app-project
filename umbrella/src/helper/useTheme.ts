import { useColorScheme } from "react-native";
import { DarkmodeColours, LightmodeColours } from "../constants/colours";

export function useTheme() {
  const scheme = useColorScheme();

  if (scheme === "dark") {
    return DarkmodeColours;
  } else if (scheme === "light") {
    return LightmodeColours;
  } else {
    return DarkmodeColours; // if it doesnt work it defaults to dark mode (hopefully)
  }
}
