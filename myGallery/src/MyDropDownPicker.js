import { Text, TouchableOpacity, View } from "react-native";

const headerHeight = 50;

export default ({ selectedAlbumTitle, onPressAddAlbum }) => {
  return (
    <View
      style={{
        height: headerHeight,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{selectedAlbumTitle}</Text>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 0,
          height: headerHeight,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
        onPress={onPressAddAlbum}
      >
        <Text style={{ fontSize: 12 }}>앨범 추가</Text>
      </TouchableOpacity>
    </View>
  );
};
