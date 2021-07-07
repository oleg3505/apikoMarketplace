import React from 'react';
import s from './styles';
import { Text, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { Touchable } from '../../../../components';
import * as ImagePicker from 'expo-image-picker';

function BottomActionSheet({ setImage }, ref) {
  async function onChooseCamera() {
    let resultCamera = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultCamera.cancelled) {
      setImage((prevState) => [...prevState, resultCamera.uri]);
    }
    ref.current?.hide();
  }
  async function onChooseGallery() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage((prevState) => [...prevState, result.uri]);
    }
    ref.current?.hide();
  }
  function onChooseCansel() {
    ref.current?.hide();
  }
  return (
    <ActionSheet ref={ref}>
      <Text style={s.titleTextActionSheet}>Which one do you like?</Text>

      <Touchable style={s.chooseContainerActionSheet} onPress={onChooseCamera}>
        <Text style={s.chooseTextActionSheet}>Camera</Text>
      </Touchable>
      <Touchable style={s.chooseContainerActionSheet} onPress={onChooseGallery}>
        <Text style={s.chooseTextActionSheet}>Gallery</Text>
      </Touchable>

      <Touchable style={s.chooseContainerActionSheet} onPress={onChooseCansel}>
        <Text style={s.chooseTextActionSheet}>Cansel</Text>
      </Touchable>
    </ActionSheet>
  );
}

export default React.forwardRef(BottomActionSheet);
