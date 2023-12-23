import { StyleSheet, Platform, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/Header";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import Profile from "./src/Profile";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import { useState } from "react";
import TabBar from "./src/TabBar";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

console.log(Platform.OS, statusBarHeight);
console.log(bottomSpace);

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
    console.log("ho");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["right", "left"]}>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Header />
          <Margin height={10} />
          <Profile
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
          />
          <Margin height={15} />
          <Division />
          <Margin height={12} />

          <FriendSection
            friendProfileLen={friendProfiles.length}
            onPressArrow={onPressArrow}
            isOpened={isOpened}
          />
          <FriendList data={friendProfiles} isOpened={isOpened} />
        </View>
        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
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
  },
});
