import React, { useRef } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Platform,
  Button,
  Image,
} from 'react-native';
import { useState } from 'react';
import s from './styles';
import { AuthBottom, Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { AddPosrStackNavigation } from '../../navigation/AddPostStackNavigation';
import { Ionicons } from '@expo/vector-icons';
import ActionSheet from 'react-native-actions-sheet';
import { colors } from '../../styles';
// import * as PermissSions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { useEffect } from 'react';
import NotLogined from '../../components/NotLogined/NotLogined';
import { useStore } from '../../stores/CreateStore';
import { observer } from 'mobx-react';
import { screens } from '../../navigation/screens';
import Api from '../../api';
import * as SecureStore from 'expo-secure-store';
import { Entypo } from '@expo/vector-icons';

function AddPostScreen() {
  const actionRef = useRef();

  const [title, setTitle] = useState('');
  function onChageTitle(val) {
    setTitle(val);
  }

  const [description, setDescription] = useState('');
  function onChageDescription(val) {
    setDescription(val);
  }
  const [price, setPrice] = useState('');
  function onChagePrice(val) {
    setPrice(val);
  }

  const [location, setLocation] = useState('');
  function onChageLocation(val) {
    setLocation(val);
  }

  function onChooseCamera() {
    pickImageCamera();
    actionRef.current.hide();
  }
  function onChooseGallery() {
    pickImage();
    actionRef.current.hide();
  }
  function onChooseCansel() {
    actionRef.current?.hide();
  }

  function onOpenActionSheet() {
    actionRef.current?.setModalVisible();
  }

  const [image, setImage] = useState([]);

  const body = {
    title: title,
    description: description,
    photos: [`${image}`],
    price: +price,
    location: location,
  };
  const { latestProducts, viewer } = useStore();
  async function onPressPost() {
    console.log(latestProducts);
    latestProducts.createProduct.run(body);
    setImage([]);
    setPrice('');
    setDescription('');
    setLocation('');
    nav.navigate(screens.Brovse);
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage((prevState) => [...prevState, result.uri]);
    }
  };
  const pickImageCamera = async () => {
    let resultCamera = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultCamera.cancelled) {
      setImage((prevState) => [...prevState, resultCamera.uri]);
    }
  };

  if (!viewer.isLoggedIn) {
    return <NotLogined text="Login to add new post" />;
  }
  const nav = useNavigation();
  function closeAddPost() {
    nav.navigate(screens.Brovse);
  }
  return (
    <ScrollView style={s.mainContainer}>
      <View style={s.headerContainer}>
        <Touchable onPress={closeAddPost}>
          <Ionicons name="close" size={30} color="#349A89" />
        </Touchable>
        <View style={s.headerText}>
          <Text style={s.headerNewPostText}>New Post</Text>
        </View>
        <Touchable onPress={onPressPost}>
          <Text style={s.headerPostText}>Post</Text>
        </Touchable>
      </View>
      <View style={s.keyInfoContainer}>
        <Text>KEY INFORMATION</Text>
        <View style={s.titleInput}>
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={onChageTitle}
          />
        </View>
        <View style={s.descriptionInput}>
          <TextInput
            style={s.descriptionTextInput}
            placeholder="Description"
            value={description}
            multiline={true}
            onChangeText={onChageDescription}
          />
        </View>
      </View>
      <View>
        <View style={s.photosContainer}>
          <Text>PHOTOS</Text>
        </View>
        <View style={s.addPhotosContainer}>
          <Touchable style={s.addPhoto} onPress={onOpenActionSheet}>
            <Ionicons name="add" size={24} color={colors.grey} />
          </Touchable>
          {image &&
            image.map((uri) => (
              <Image
                source={{ uri }}
                style={{ width: 100, height: 100, marginHorizontal: 10 }}
              />
            ))}
        </View>
      </View>
      <View>
        <View style={s.priceTextContainer}>
          <Text>PRICE</Text>
        </View>
        <View style={s.addPriceContainer}>
          <View style={s.priceCashContainer}>
            <View style={s.priceInputContainer}>
              <TextInput
                style={s.priceTextInput}
                placeholder="Price"
                value={price}
                keyboardType="numeric"
                onChangeText={onChagePrice}
              />
            </View>
            <View style={s.cashInputContainer}>
              <Text style={{ color: colors.primary }}>$</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={s.priceTextContainer}>
          <Text>LOCATION</Text>
        </View>
        <View style={s.addPriceContainer}>
          <View style={s.priceCashContainer}>
            <View style={s.priceInputContainer}>
              <TextInput
                style={s.priceTextInput}
                placeholder="Location"
                value={location}
                onChangeText={onChageLocation}
              />
            </View>
            <View style={s.cashInputContainer}>
              <Entypo name="location-pin" size={24} color={colors.primary} />
            </View>
          </View>
        </View>
      </View>
      <ActionSheet ref={actionRef}>
        <View style={s.mainActionSheet}>
          <View style={s.titleActionSheet}>
            <Text style={s.titleTextActionSheet}>Which one do you like?</Text>
          </View>
          <View>
            <Touchable
              style={s.chooseContainerActionSheet}
              onPress={onChooseCamera}
            >
              <Text style={s.chooseTextActionSheet}>Camera</Text>
            </Touchable>
            <Touchable
              style={s.chooseContainerActionSheet}
              onPress={onChooseGallery}
            >
              <Text style={s.chooseTextActionSheet}>Gallery</Text>
            </Touchable>
          </View>
          <View>
            <Touchable
              style={s.chooseContainerActionSheet}
              onPress={onChooseCansel}
            >
              <Text style={s.chooseTextActionSheet}>Cansel</Text>
            </Touchable>
          </View>
        </View>
      </ActionSheet>
    </ScrollView>
  );
}

export default observer(AddPostScreen);
