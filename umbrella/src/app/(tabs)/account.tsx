import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../helper/useTheme";
export default function Account() {
  const colours = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colours.screenBackground }]}
    >
      <View style={{ alignItems: "center", marginTop: 60 }}>
        <View
          style={{
            backgroundColor: colours.innerField,
            width: 120,
            height: 120,
            borderRadius: 60,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={colours.umbrellaLogo}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <Pressable style={{ marginBottom: 40 }}>
          <Text style={{ color: colours.text }}>Choose photo...</Text>
        </Pressable>

        <View style={styles.profileContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[{ color: colours.text }, styles.label]}>
              Username
            </Text>
            <TextInput
              style={styles.input}
              placeholder="developer"
              placeholderTextColor={colours.fadedText}
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[{ color: colours.text }, styles.label]}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="myemail@gmail.com"
              placeholderTextColor={colours.fadedText}
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[{ color: colours.text }, styles.label]}>
              Password
            </Text>
            <TextInput
              style={styles.input}
              placeholder="password"
              placeholderTextColor={colours.fadedText}
            ></TextInput>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    width: "90%",
  },
  label: {
    width: 100,
  },
  input: {
    flex: 1,
  },
});
