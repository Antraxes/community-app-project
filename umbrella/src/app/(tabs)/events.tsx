import { useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../helper/useTheme";

export default function Events() {
  const router = useRouter();
  const colours = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colours.screenBackground }]}
    >
      <View>
        {/* <Button
          title="Sign In"
          onPress={() => {
            router.replace("/(auth)/login");
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
