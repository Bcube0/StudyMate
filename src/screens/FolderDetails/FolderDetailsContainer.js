import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FolderDetailsComponent from "./FolderDetailsComponent";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const FolderDetailsContainer = (props) => {
  const { navigation } = props;
  const { data } = props.route.params;
  const isFocused = useIsFocused();
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  useEffect(() => {
    if (isFocused) {
      fetchNotes(); // Fetch notes when the component is focused
    }
  }, [isFocused]);

  const backPress = () => {
    navigation.goBack();
  };

  const onAddNote = (folderId) => {
    navigation.navigate("AddNoteContainer", {
      folderId: folderId,
      onNoteAdded: fetchNotes, // Pass the fetchNotes function as a callback
    });
  };

  const fetchNotes = async () => {
    const existingFolders = await AsyncStorage.getItem("folders");
    const foldersArray = existingFolders ? JSON.parse(existingFolders) : [];
    const currentFolder = foldersArray.find(
      (folder) => folder.id === data?.item?.id
    );
    setNotes(currentFolder?.notes || []); // Set notes or empty array if not found
  };

  const handleDeleteNote = async (noteId) => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            const updatedNotes = notes.filter((note) => note.id !== noteId);
            try {
              const folderId = data?.item?.id;
              const storedFolders = await AsyncStorage.getItem("folders");
              let folders = JSON.parse(storedFolders);
              const folderIndex = folders.findIndex(
                (folder) => folder.id === folderId
              );
              folders[folderIndex].notes = updatedNotes;
              await AsyncStorage.setItem("folders", JSON.stringify(folders));
              setNotes(updatedNotes); // Update state
            } catch (error) {
              console.error("Error deleting note:", error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleNoteDetails = (item) => {
    navigation.navigate("NoteDetailsContainer", { data: { item: item } });
  };

  const handleEditNote = (item) => {
    navigation.navigate("AddNoteContainer", {
      folderId: item?.folderId,
      noteId: item?.id, // Pass the note ID for reference
      title: item?.title,
      description: item?.description,
      image: item?.image, // Pass the image if it exists
      reminderDate: item?.reminderDate,
      selectedImageName: item?.selectedImageName,
      voiceText: item?.voiceText,
    });
  };

  return (
    <FolderDetailsComponent
      backPress={backPress}
      isLoading={false}
      data={data}
      onAddNote={onAddNote}
      notes={notes}
      searchQuery={searchQuery} // Pass search query state
      setSearchQuery={setSearchQuery} // Pass setSearchQuery to handle input
      handleNoteDetails={handleNoteDetails}
      handleEditNote={handleEditNote}
      handleDeleteNote={handleDeleteNote}
    />
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderDetailsContainer);
