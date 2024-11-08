import React, { memo, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { Alert, BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { launchImageLibrary } from "react-native-image-picker";
import NoteDetailsComponent from "./NoteDetailsComponent";
import Tts from "react-native-tts"; // Import TTS library

const NoteDetailsContainer = memo(({ navigation, route }) => {
  const { data } = route.params;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImageName, setSelectedImageName] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [result, setResult] = useState("");

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

  useEffect(() => {
    console.log("data", JSON.stringify(data?.item));
  }, []);

  const backPress = () => {
    navigation.goBack();
  };


  return (
    <NoteDetailsComponent
      backPress={backPress}
      title={title}
      description={description}
      selectedImageName={selectedImageName}
      data={data}
    />
  );
});

const mapStateToProps = ({ userSession }) => ({
  userData: userSession,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetailsContainer);
