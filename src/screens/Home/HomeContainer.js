import React, { memo, useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import HomeComponent from "./HomeComponent";
import { BackHandler } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeContainer = memo((props) => {
  const { navigation } = props;
  const [isLoading, setLoading] = React.useState(false);
  const [folders, setFolders] = useState([]);
  const [previousScore, setPreviousScore] = useState(null); // State for previous score
  const [previousScoreNet, setPreviousScoreNet] = useState(null); // State for previous score

  const route = useRoute();

  useFocusEffect(
    useCallback(() => {
      const fetchFolders = async () => {
        const storedFolders = await AsyncStorage.getItem("folders");
        console.log("storedFolders", storedFolders);

        if (storedFolders) {
          setFolders(JSON.parse(storedFolders));
        }
      };
      fetchFolders();
      fetchPreviousScore(); // Fetch the previous score when the component mounts
    }, [])
  );

  // Fetch previous score from AsyncStorage
  const fetchPreviousScore = async () => {
    try {
      const savedScore = await AsyncStorage.getItem("quizScore");
      const savedScoreNet = await AsyncStorage.getItem("quizTwoScore");
      console.log("savedScore", savedScore);

      console.log("savedScoreNet", savedScoreNet);

      if (savedScore !== null) {
        setPreviousScore(parseInt(savedScore, 10));
      }
      if (savedScoreNet !== null) {
        setPreviousScoreNet(parseInt(savedScoreNet, 10));
      }
    } catch (error) {
      console.error("Failed to load previous score", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === "HomeContainer") {
          BackHandler.exitApp();
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [route])
  );

  const handleStartQuiz = (item) => {
    if (item?.id == 1) {
      navigation.navigate("QuizContainer");
    } else {
      navigation.navigate("QuizTwoContainer");
    }
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
            try {
              // Retrieve existing folders from AsyncStorage
              const storedFolders = await AsyncStorage.getItem("folders");
              let folders = JSON.parse(storedFolders);

              // Loop through folders to find the note to delete
              folders.forEach((folder) => {
                folder.notes = folder.notes.filter(
                  (note) => note.id !== noteId
                );
              });

              // Update the AsyncStorage with the new folders array
              await AsyncStorage.setItem("folders", JSON.stringify(folders));

              // Update the state to reflect the changes
              setFolders(folders); // Assuming setFolders is passed as a prop
            } catch (error) {
              console.error("Error deleting note:", error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleAddQuestion = (item) => {
    navigation.navigate("AddQuestionsContainer");
  };

  return (
    <HomeComponent
      props={props}
      isLoading={isLoading}
      handleStartQuiz={handleStartQuiz}
      handleNoteDetails={handleNoteDetails}
      handleEditNote={handleEditNote}
      handleDeleteNote={handleDeleteNote}
      folders={folders}
      previousScore={previousScore}
      previousScoreNet={previousScoreNet}
      handleAddQuestion={handleAddQuestion}
    />
  );
});

const mapStateToProps = ({ userSession }) => ({
  userData: userSession,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
