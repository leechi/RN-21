import { StatusBar } from "expo-status-bar";
import dayjs from "dayjs";
import { StyleSheet, Text, View } from "react-native";
import { getCalendarColumns } from "./src/util";
import { useEffect } from "react";

export default function App() {
  const now = dayjs();
  const columns = getCalendarColumns(now);

  useEffect(() => {
    console.log(columns);
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
