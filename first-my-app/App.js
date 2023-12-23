import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import CustomHook from "./CustomHook";

const Header = ({ friend }) => {
  return <Text>{friend}</Text>;
};

const Myprofile = () => {
  return (
    <Profile
      uri="https://mblogthumb-phinf.pstatic.net/MjAxNzA0MDNfNjMg/MDAxNDkxMTg4NzEyMDI2.TdFSEg_ozAYOBcnzUMGTJZvIvp81450nYPwnJXsUaH8g.F0YTfHrUrEXKJc9ezOQ7P3cq9jOK7wfQn7r7Qw_UOn4g.JPEG.truthy2000/7.jpg?type=w800"
      name="치연"
      profileSize={50}
    />
  );
};

const Division = () => {
  return <Text>Division</Text>;
};

const FriendSection = () => {
  return <Text>FriendSection</Text>;
};

const FriendList = () => {
  return (
    <View>
      <Profile
        uri="https://mblogthumb-phinf.pstatic.net/MjAxNzA0MDNfNjMg/MDAxNDkxMTg4NzEyMDI2.TdFSEg_ozAYOBcnzUMGTJZvIvp81450nYPwnJXsUaH8g.F0YTfHrUrEXKJc9ezOQ7P3cq9jOK7wfQn7r7Qw_UOn4g.JPEG.truthy2000/7.jpg?type=w800"
        name="도현"
        profileSize={30}
      />
      <Profile
        uri="https://mblogthumb-phinf.pstatic.net/MjAxNzA0MDNfNjMg/MDAxNDkxMTg4NzEyMDI2.TdFSEg_ozAYOBcnzUMGTJZvIvp81450nYPwnJXsUaH8g.F0YTfHrUrEXKJc9ezOQ7P3cq9jOK7wfQn7r7Qw_UOn4g.JPEG.truthy2000/7.jpg?type=w800"
        name="한솔"
        profileSize={30}
      />
      <Profile
        uri="https://mblogthumb-phinf.pstatic.net/MjAxNzA0MDNfNjMg/MDAxNDkxMTg4NzEyMDI2.TdFSEg_ozAYOBcnzUMGTJZvIvp81450nYPwnJXsUaH8g.F0YTfHrUrEXKJc9ezOQ7P3cq9jOK7wfQn7r7Qw_UOn4g.JPEG.truthy2000/7.jpg?type=w800"
        name="훈"
        profileSize={30}
      />
      <Profile
        uri="https://mblogthumb-phinf.pstatic.net/MjAxNzA0MDNfNjMg/MDAxNDkxMTg4NzEyMDI2.TdFSEg_ozAYOBcnzUMGTJZvIvp81450nYPwnJXsUaH8g.F0YTfHrUrEXKJc9ezOQ7P3cq9jOK7wfQn7r7Qw_UOn4g.JPEG.truthy2000/7.jpg?type=w800"
        name="해승"
        profileSize={30}
      />
      <Profile
        uri="https://mblogthumb-phinf.pstatic.net/MjAxNzA0MDNfNjMg/MDAxNDkxMTg4NzEyMDI2.TdFSEg_ozAYOBcnzUMGTJZvIvp81450nYPwnJXsUaH8g.F0YTfHrUrEXKJc9ezOQ7P3cq9jOK7wfQn7r7Qw_UOn4g.JPEG.truthy2000/7.jpg?type=w800"
        name="태양"
        profileSize={30}
      />
    </View>
  );
};

const Profile = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri: props.uri,
        }}
        style={{ width: props.profileSize, height: props.profileSize }}
      />
      <Text>{props.name}</Text>
    </View>
  );
};

export default function App() {
  const [isRefresh, setIsRefresh] = useState(false);
  useEffect(() => {
    if (isRefresh) {
      setTimeout(() => {
        setIsRefresh(false);
      }, 2000);
    }
  }, [isRefresh]);
  return (
    <View style={styles.container}>
      <Header friend={"친구"} />
      <Myprofile />
      <Division />
      <FriendSection />
      <FriendList />
      <Button title="click" onPress={() => setIsRefresh(true)} />
      {isRefresh ? <ActivityIndicator /> : null}
      <CustomHook />
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
