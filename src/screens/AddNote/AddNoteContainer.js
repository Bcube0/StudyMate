import React, { memo, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { Alert, BackHandler, PermissionsAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import AddNoteComponent from "./AddNoteComponent";
import PushNotification from "react-native-push-notification";
import RNFS from "react-native-fs";
import Voice from "@react-native-voice/voice";

const AddNoteContainer = memo(({ navigation, route }) => {
  const {
    folderId,
    onNoteAdded,
    noteId,
    title: initialTitle,
    description: initialDescription,
    image: initialImage,
    reminderDate: initialReminderDate,
    selectedImageName: initialSelectedImageName,
    voiceText: initialVoiceText,
  } = route.params;

  const [title, setTitle] = useState(initialTitle || ""); // Prepopulate if editing
  const [description, setDescription] = useState(initialDescription || "");
  const [voiceText, setVoiceText] = useState(initialVoiceText || "");
  const [selectedImageUri, setSelectedImageUri] = useState(
    initialImage || null
  ); // Prepopulate the image URI if editing
  const [reminderDate, setReminderDate] = useState(
    initialReminderDate ? new Date(initialReminderDate) : new Date()
  ); // Use the passed reminder date

  const [selectedImageName, setSelectedImageName] = useState(
    initialSelectedImageName || ""
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = () => {
    setIsListening(true);
  };

  const onSpeechEnd = () => {
    setIsListening(false);
  };

  const onSpeechResults = (event) => {
    setResult(event.value[0]);
    setVoiceText(event.value[0]);
  };

  const startListening = async () => {
    try {
      await Voice.start("en-US"); // You can set the language here
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    console.log("initialImage", initialImage);
    requestPermissions();
    setSelectedImageUri(
      initialImage && !initialImage.startsWith("file://")
        ? `file://${initialImage}`
        : initialImage
    );
  }, [initialImage]);

  async function requestPermissions() {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
        if (
          granted["android.permission.CAMERA"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted["android.permission.READ_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted["android.permission.WRITE_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log("Permissions granted");
        } else {
          console.log("Permissions denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }

  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    requestPermissions: Platform.OS === "ios",
  });

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: "your-channel-id", // (required)
        channelName: "My channel", // (required)
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const backPress = () => {
    navigation.goBack();
  };

  const handleImageUpload = () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
    };

    Alert.alert(
      "Select Image",
      "Choose an option",
      [
        {
          text: "Camera",
          onPress: () => launchCamera(options, handleResponse),
        },
        {
          text: "Gallery",
          onPress: () => launchImageLibrary(options, handleResponse),
        },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };
  const saveImageLocally = async (imageUri) => {
    try {
      const imageName = imageUri.substring(imageUri.lastIndexOf("/") + 1); // Extract image name
      const destinationPath = `${RNFS.DocumentDirectoryPath}/${imageName}`; // Path to save the image

      await RNFS.copyFile(imageUri, destinationPath); // Copy image to local path
      return destinationPath; // Return the new path
    } catch (error) {
      console.error("Error saving image:", error);
      throw error;
    }
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.errorCode) {
      console.error("ImagePicker Error: ", response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      const selectedAsset = response.assets[0];
      setSelectedImageName(selectedAsset.fileName);
      setSelectedImageUri(selectedAsset.uri); // Save the URI for display
    }
  };

  const handleAddNote = async () => {
    if (title.trim() === "" || description.trim() === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Handle the image path
    let localImagePath = null;
    if (selectedImageUri) {
      localImagePath = await saveImageLocally(selectedImageUri);
    }

    // Create or update the note
    const newNote = {
      id: noteId || Date.now().toString(),
      title,
      description,
      image: localImagePath,
      selectedImageName, // Use the correctly formatted path
      folderId,
      reminderDate,
      voiceText,
    };

    try {
      const existingFolders = await AsyncStorage.getItem("folders");
      const foldersArray = existingFolders ? JSON.parse(existingFolders) : [];
      const updatedFolders = foldersArray.map((folder) => {
        if (!folder.notes) {
          folder.notes = [];
        }

        // Check if it's an edit or a new note
        if (folder.id === folderId) {
          if (noteId) {
            // Editing an existing note
            const updatedNotes = folder.notes.map((note) =>
              note.id === noteId ? newNote : note
            );
            return { ...folder, notes: updatedNotes };
          } else {
            // Adding a new note
            return { ...folder, notes: [...folder.notes, newNote] };
          }
        }
        return folder;
      });

      // sendNotification();
      // Save updated folders back to AsyncStorage
      await AsyncStorage.setItem("folders", JSON.stringify(updatedFolders));

      Alert.alert(
        "Success",
        noteId ? "Note updated successfully" : "Note added successfully"
      );
      navigation.goBack();

      setTitle("");
      setDescription("");
      setSelectedImageUri(null); // Clear the image selection
      setReminderDate(new Date());
      setVoiceText("");
      onNoteAdded(); // Notify parent that note was added/edited
    } catch (error) {
      console.error("Error saving note:", error);
      // Alert.alert("Error", "Could not save note, please try again.");
    }
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setReminderDate(selectedDate);
      setShowDatePicker(false);
      setShowTimePicker(true); // Show time picker after the date is set
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      const updatedDateTime = new Date(
        reminderDate.setHours(
          selectedTime.getHours(),
          selectedTime.getMinutes()
        )
      );
      setReminderDate(updatedDateTime); // Update the date with selected time
      setShowTimePicker(false);
    }
  };

  const sendNotification = () => {
    createChannel();
    PushNotification.localNotification({
      channelId: "your-channel-id",
      id: 0,
      title: `Note.`,
      message: "Note has been Added Successfully",
    });
  };

  const scheduleNotification = (date, title) => {
    createChannel();
    PushNotification.localNotificationSchedule({
      channelId: "your-channel-id",
      id: 0, // Optional: Unique ID for the notification
      title: `Reminder: ${title}`,
      message: "Don't forget your note!",
      date: new Date(), // Schedule notification at the specified date
    });
    console.log("scheduleNotification");
  };

  return (
    <AddNoteComponent
      backPress={backPress}
      title={title}
      description={description}
      selectedImageName={selectedImageName}
      handleImageUpload={handleImageUpload}
      handleAddNote={handleAddNote}
      setTitle={setTitle}
      setDescription={setDescription}
      reminderDate={reminderDate}
      showDatePicker={showDatePicker}
      showTimePicker={showTimePicker}
      handleDateChange={handleDateChange}
      handleTimeChange={handleTimeChange}
      setShowDatePicker={setShowDatePicker}
      selectedImageUri={selectedImageUri}
      noteId={noteId} // Pass the URI to the component
      result={result}
      isListening={isListening}
      startListening={startListening}
      stopListening={stopListening}
    />
  );
});

const mapStateToProps = ({ userSession }) => ({
  userData: userSession,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteContainer);
