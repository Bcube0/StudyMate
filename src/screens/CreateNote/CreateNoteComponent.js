import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {Images} from '../../utils/Theme';
import styles from './styles';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateNoteScreen = ({onNoteAdded}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImageName, setSelectedImageName] = useState(null);

  const handleImageUpload = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedAsset = response.assets[0];
        setSelectedImageName(selectedAsset.fileName);
      }
    });
  };

  const handleAddNote = async () => {
    if (title.trim() === '' || description.trim() === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newNote = {
      id: Date.now().toString(),
      title,
      description,
      image: selectedImageName,
    };

    const existingNotes = await AsyncStorage.getItem('notes');
    const notesArray = existingNotes ? JSON.parse(existingNotes) : [];
    const updatedNotes = [...notesArray, newNote];

    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));

    Alert.alert('Success', 'Note added successfully');
    setTitle('');
    setDescription('');
    setSelectedImageName(null);

    if (onNoteAdded) {
      onNoteAdded();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.blurContainer}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>Add Note</Text>
            <TouchableOpacity>
              <Image
                source={Images.profileThumnail}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.bottomText}></Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Description"
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <TouchableOpacity
          style={styles.uploadSection}
          onPress={handleImageUpload}>
          <Image source={Images.camera} style={styles.icon} />
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>

        {selectedImageName && (
          <Text style={styles.fileNameText}>
            {`Selected Image: ${selectedImageName}`}
          </Text>
        )}

        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateNoteScreen;
