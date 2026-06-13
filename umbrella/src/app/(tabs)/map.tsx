import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../helper/useTheme";

export default function Map() {
  const colours = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colours.screenBackground }]}
    >
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 51.5074,
          longitude: -0.1278,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
