import { StyleSheet, Platform, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import MyProfile from "./MyProfile";
import { myProfile } from "./src/data";
import Margin from "./Margin";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

console.log(Platform.OS, statusBarHeight);
console.log(bottomSpace);

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["right", "left"]}>
        <Header />
        <Margin height={10} />
        <MyProfile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
    marginHorizontal: 10,
  },
});
