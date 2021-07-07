import React, { useRef } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import s from './styles';
import { Touchable } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import NotLogined from '../../components/NotLogined/NotLogined';
import { useStore } from '../../stores/CreateStore';
import { observer } from 'mobx-react';
import { screens } from '../../navigation/screens';
import { AddImages, BottomActionSheet, Label } from './components';
import TextInputWithIcon from './components/TextInputWithIcon/TextInputWithIcon';

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

  const [images, setImage] = useState([]);

  function onOpenActionSheet() {
    if (images.length <= 4) {
      actionRef.current?.setModalVisible();
    } else {
      alert('To much photos');

      return;
    }
  }
  const { latestProducts, viewer } = useStore();
  async function onPressPost() {
    const body = {
      title: title,
      description: description,
      photos: images,
      price: +price,
      location: location,
    };

    latestProducts.createProduct.run(body);
    setImage([]);
    setPrice('');
    setDescription('');
    setLocation('');
    nav.navigate(screens.Brovse);
  }

  if (!viewer.isLoggedIn) {
    return <NotLogined text="Login to add new post" />;
  }
  const nav = useNavigation();
  function closeAddPost() {
    nav.goBack();
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={s.headerContainer}>
        <Touchable onPress={closeAddPost}>
          <Ionicons name="close" size={30} color="#349A89" />
        </Touchable>
        <Text style={s.headerNewPostText}>New Post</Text>
        <Touchable onPress={onPressPost}>
          <Text style={s.headerPostText}>Post</Text>
        </Touchable>
      </View>
      <ScrollView style={s.mainContainer}>
        <Label name="TITLE" />
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
        <Label name="PHOTOS" />
        <AddImages onOpenActionSheet={onOpenActionSheet} images={images} />
        <Label name="PRICE" />
        <View style={s.addPriceContainer}>
          <View style={s.priceCashContainer}>
            <TextInputWithIcon
              iconName="attach-money"
              placeholder="Price"
              value={price}
              keyboardType="numeric"
              onChangeText={onChagePrice}
            />
          </View>
        </View>
        <Label name="LOCATION" />
        <View style={s.addPriceContainer}>
          <View style={s.priceCashContainer}>
            <TextInputWithIcon
              iconName="location-on"
              placeholder="Location"
              value={location}
              onChangeText={onChageLocation}
            />
          </View>
        </View>
        <BottomActionSheet ref={actionRef} setImage={setImage} />
      </ScrollView>
    </View>
  );
}

export default observer(AddPostScreen);
