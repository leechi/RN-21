import {
  Modal,
  View,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";

export default ({
  modalVisible,
  albumTitle,
  setAlbumTitle,
  onSubmitEditing,
  onPressBackDrop,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable onPress={onPressBackDrop} style={{ flex: 1 }}>
          <SafeAreaView
            style={{ width: "100%", position: "absolute", bottom: 0 }}
          >
            <TextInput
              placeholder="앨범명을 입력해주세요"
              style={{
                width: "100%",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderWidth: 0.5,
                borderColor: "lightgray",
              }}
              value={albumTitle}
              onChangeText={setAlbumTitle}
              onSubmitEditing={onSubmitEditing}
              autoFocus={true}
            />
          </SafeAreaView>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
};
