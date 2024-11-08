import React, { useState, memo, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  Modal,
} from "react-native";
import styles from "./styles";
import { Images } from "../../utils/Theme"; // Assuming you have a folder icon in Images
import Loader from "../../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const CoursesComponent = memo((props) => {
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState("");
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const fetchFolders = async () => {
        const storedFolders = await AsyncStorage.getItem("folders");
        if (storedFolders) {
          setFolders(JSON.parse(storedFolders));
        }
      };
      fetchFolders();
    }, [])
  );

  const handleCreateFolder = async () => {
    if (!newFolderName.trim()) {
      Alert.alert("Please enter a folder name");
      return;
    }

    const newFolder = {
      id: Date.now().toString(),
      title: newFolderName,
      filesCount: 0,
    };

    const updatedFolders = [...folders, newFolder];
    try {
      await AsyncStorage.setItem("folders", JSON.stringify(updatedFolders));
      setFolders(updatedFolders);
      setNewFolderName("");
      setIsCreatingFolder(false);
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  const renderFolderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => props.folderDetailsPress(item)}
      onLongPress={() => {
        setFolderToDelete(item); // Set the folder to be deleted
        setModalVisible(true); // Show the confirmation modal
      }}
      style={styles.folderGridItem} // Adjusted style for grid layout
    >
      <Image source={Images.folder} style={styles.folderIcon} />
      <View style={styles.folderDetails}>
        <Text style={styles.folderTitle}>{item?.title}</Text>
        <Text style={styles.fileCount}>
          {item?.notes ? item?.notes?.length : "0"} files
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handleDeleteFolder = async () => {
    if (!folderToDelete) return;

    const updatedFolders = folders.filter(
      (folder) => folder.id !== folderToDelete.id
    );

    try {
      // Update AsyncStorage
      await AsyncStorage.setItem("folders", JSON.stringify(updatedFolders));
      setFolders(updatedFolders);
      setModalVisible(false);
      setFolderToDelete(null);
    } catch (error) {
      console.error("Error deleting folder:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <View style={styles.topView}>
        <View style={styles.blurContainer}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>Your Folders</Text>
            <TouchableOpacity>
              <Image source={Images.app_icon} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
          <Text style={styles.bottomText}>Manage your folders</Text>
          {/* Create Folder Button */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.createFolderButton}
              onPress={() => setIsCreatingFolder(!isCreatingFolder)}
            >
              <Text style={styles.createFolderButtonText}>Create Folder</Text>
            </TouchableOpacity>
          </View>

          {isCreatingFolder && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={isCreatingFolder}
              onRequestClose={() => setIsCreatingFolder(false)}
            >
              <View style={styles.modalContainer11}>
                <View style={styles.modalContent11}>
                  {/* Title Bar */}
                  <View style={styles.titleBar}>
                    <TouchableOpacity
                      onPress={() => setIsCreatingFolder(false)}
                    >
                      <Text style={styles.cancelButton}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>New Folder</Text>
                    <TouchableOpacity onPress={handleCreateFolder}>
                      <Text style={styles.doneButton}>Done</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Input for Folder Name */}
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.folderInput}
                      placeholder="New Folder"
                      value={newFolderName}
                      onChangeText={setNewFolderName}
                    />
                    {newFolderName.length > 0 && (
                      <TouchableOpacity
                        onPress={() => setNewFolderName("")}
                        style={styles.clearButton}
                      >
                        <Text style={styles.clearButtonText}>X</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </View>

      {folders.length === 0 ? (
        <View style={styles.noFoldersContainer}>
          <Text style={styles.noFoldersText}>No folders available</Text>
        </View>
      ) : (
        <FlatList
          data={folders}
          renderItem={renderFolderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.gridListContainer}
          numColumns={2} // Show folders in grid with 2 columns
        />
      )}

      {/* Confirmation Modal for Deletion */}
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Deletion</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to delete the folder "
              {folderToDelete?.title}"?
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(false);
                  setFolderToDelete(null);
                }}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleDeleteFolder}
              >
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
});

export default CoursesComponent;
