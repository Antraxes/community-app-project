import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../helper/useTheme";

export default function Login() {
  const router = useRouter();
  const colours = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colours.screenBackground }]}
    >
      <View style={styles.content}>
        <Image style={styles.image} source={colours.umbrellaLogo} />
        <Text style={[styles.inputHeading, { color: colours.text }]}>
          Username
        </Text>
        <View style={styles.inputSheet}>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: colours.borders,
                color: colours.text,
                backgroundColor: colours.innerField,
              },
            ]}
            placeholder="Username..."
            placeholderTextColor={colours.fadedText}
            autoComplete="username"
            autoCapitalize="none"
            onChangeText={setUsername}
          />
          <Text style={[styles.inputHeading, { color: colours.text }]}>
            Password
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: colours.borders,
                color: colours.text,
                backgroundColor: colours.innerField,
              },
            ]}
            placeholder="Password..."
            placeholderTextColor={colours.fadedText}
            autoComplete="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={setPassword}
          />
          <Pressable
            style={[
              styles.button,
              {
                borderColor: colours.borders,
                backgroundColor: colours.innerField,
              },
            ]}
            onPress={() => {
              if (username === "developer" && password === "password") {
                router.replace("/(tabs)/home");
              } else {
                Alert.alert("Login Failed", "Incorrect username or password.");
              }
            }}
          >
            <Text style={[styles.buttonText, { color: colours.text }]}>
              Sign In
            </Text>
          </Pressable>
          <View style={styles.signUpContainer}>
            <Text style={[{ color: colours.text }]}>
              Don't have an account?
            </Text>
            <Pressable
              onPress={() => {
                router.replace("/(auth)/signup");
              }}
            >
              <Text
                style={{
                  color: colours.text,
                  textDecorationLine: "underline",
                  marginLeft: 4,
                }}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // stretches everything across screen
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 80,
    alignSelf: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  heading: { fontSize: 15 },
  inputSheet: {},
  input: {
    borderWidth: 2,
    marginHorizontal: 40,
    marginBottom: 30,
    paddingLeft: 15,
    borderRadius: 15,
  },
  inputHeading: {
    fontSize: 17,
    marginLeft: 49,
    marginBottom: 5,
  },
  button: {
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonText: {
    marginHorizontal: 10,
    fontSize: 12,
    marginVertical: 2,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 40,
    marginRight: 20,
  },
});
