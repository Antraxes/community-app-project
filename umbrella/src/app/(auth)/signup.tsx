import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../helper/useTheme";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirm_email, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const colours = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colours.screenBackground }]}
    >
      <Text style={[styles.heading, { color: colours.text }]}>Sign Up</Text>

      <View>
        <View>
          <Text style={[styles.inputHeading, { color: colours.text }]}>
            Username
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colours.innerField,
                color: colours.text,
                borderColor: colours.borders,
              },
            ]}
          />
        </View>

        <View>
          <Text style={[styles.inputHeading, { color: colours.text }]}>
            Email
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colours.innerField,
                color: colours.text,
                borderColor: colours.borders,
              },
            ]}
          />
        </View>

        <View>
          <Text style={[styles.inputHeading, { color: colours.text }]}>
            Confirm Email
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colours.innerField,
                color: colours.text,
                borderColor: colours.borders,
              },
            ]}
          />
        </View>

        <View>
          <Text style={[styles.inputHeading, { color: colours.text }]}>
            Password
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colours.innerField,
                color: colours.text,
                borderColor: colours.borders,
              },
            ]}
          />
        </View>

        <View>
          <Text style={[styles.inputHeading, { color: colours.text }]}>
            Confirm Password
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colours.innerField,
                color: colours.text,
                borderColor: colours.borders,
              },
            ]}
          />
        </View>
      </View>

      <Pressable
        style={[
          styles.button,
          { backgroundColor: colours.innerField, borderColor: colours.borders },
        ]}
        onPress={() => router.replace("/(tabs)/home")}
      >
        <Text style={[styles.buttonText, { color: colours.text }]}>
          Continue
        </Text>
      </Pressable>
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
  heading: {
    fontSize: 25,
    marginLeft: 30,
    marginBottom: 100,
    marginTop: 40,
  },
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
    alignSelf: "flex-end",
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 50,
    marginTop: 30,
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
