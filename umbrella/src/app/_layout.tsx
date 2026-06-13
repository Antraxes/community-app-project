import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter();

  let isAuth = false;
  useEffect(() => {
    if (!isAuth) {
      router.replace("/(tabs)/home");
    } else {
      router.replace("/(tabs)/home");
    }
  });
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
