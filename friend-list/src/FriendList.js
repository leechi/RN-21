import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import Margin from "./Margin";

export default (props) => {
  return (
    props.isOpened && (
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* {
    uri: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
    name: "김민호",
    introduction: "Minho Kim",
  }, */}
        {props.data.map((item, i) => {
          return (
            <View key={i}>
              <Profile
                uri={item.uri}
                name={item.name}
                introduction={item.introduction}
              />
              <Margin height={13} />
            </View>
          );
        })}
      </ScrollView>
    )
  );
};
