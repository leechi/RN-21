import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert, TouchableOpacity, Text, Dimensions, Image } from "react-native";

const defaultAlbum = {
  id: 1,
  title: "기본",
};
const width = Dimensions.get("screen").width;
const columnSize = width / 3;
export const useGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(defaultAlbum);
  const [albums, setAlbums] = useState([defaultAlbum]);
  const [modalVisible, setModalVisible] = useState(false);
  const [albumTitle, setAlbumTitle] = useState("");
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const lastId = images.length === 0 ? 0 : images[images.length - 1].id;
      const newImage = {
        id: lastId + 1,
        uri: result.assets[0].uri,
      };
      setImages([...images, newImage]);
    }
  };

  const deleteImage = (imageId) => {
    Alert.alert("이미지를 삭제하시겠어요?", "", [
      {
        style: "cancel",
        text: "아니요",
      },
      {
        text: "네",
        onPress: () => {
          // TODO : deleteImage
          const newImages = images.filter((image) => image.id !== imageId);
          setImages(newImages);
        },
      },
    ]);
  };

  const addAlbum = () => {
    const lastId = albums.length === 0 ? 0 : albums[albums.length - 1].id;
    const newAlbum = {
      id: lastId + 1,
      title: albumTitle,
    };
    setAlbums([...albums, newAlbum]);
  };
  const imagesWidthAddButton = [...images, { id: -1, uri: "" }];

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const onPressOpenGallery = () => {
    pickImage();
  };

  const renderItem = ({ item: { id, uri }, index }) => {
    const onLongPressImage = (imageId) => {
      deleteImage(imageId);
    };
    if (id === -1) {
      return (
        <TouchableOpacity
          onPress={onPressOpenGallery}
          style={{
            width: columnSize,
            height: columnSize,
            backgroundColor: "lightgrey",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 50, fontWeight: "100" }}>+</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onLongPress={() => onLongPressImage(id)}>
        <Image
          source={{ uri }}
          style={{ width: columnSize, height: columnSize }}
        />
      </TouchableOpacity>
    );
  };

  const resetAlbumTitle = () => {
    setAlbumTitle("");
  };

  return {
    images,
    pickImage,
    deleteImage,
    imagesWidthAddButton,
    setAlbums,
    selectedAlbum,
    modalVisible,
    renderItem,
    openModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    closeModal,
    resetAlbumTitle,
  };
};
