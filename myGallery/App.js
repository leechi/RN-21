import {
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  Platform,
} from "react-native";
import { useGallery } from "./src/use-gallery";
import MyDropDownPicker from "./src/MyDropDownPicker";
import TextInputModal from "./src/TextInputModal";

export default function App() {
  const {
    selectedAlbum,
    openModal,
    modalVisible,
    imagesWidthAddButton,
    renderItem,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    closeModal,
    resetAlbumTitle,
  } = useGallery();

  const onPressAddAlbum = () => {
    openModal();
  };

  const onSubmitEditing = () => {
    if (!albumTitle) return;
    // 1. 앨범에 타이틀 추가
    addAlbum();
    // 2. 모달닫기 & value 초기화
    closeModal();
    resetAlbumTitle();
  };

  const onPressBackDrop = () => {
    closeModal();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 앨범 DropDown, 앨범 추가 버튼 */}
      <MyDropDownPicker
        selectedAlbumTitle={selectedAlbum.title}
        onPressAddAlbum={onPressAddAlbum}
      />
      {/* 앨범을 추가하는 TextInputModal */}
      <TextInputModal
        modalVisible={modalVisible}
        albumTitle={albumTitle}
        setAlbumTitle={setAlbumTitle}
        onSubmitEditing={onSubmitEditing}
        onPressBackDrop={onPressBackDrop}
      />
      {/* 이미지 리스트 */}
      <FlatList
        data={imagesWidthAddButton}
        renderItem={renderItem}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});
