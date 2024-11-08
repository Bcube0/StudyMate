import React, { memo, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { Alert, BackHandler, PermissionsAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import AddQuestionsComponent from "./AddQuestionsComponent";
import PushNotification from "react-native-push-notification";
import RNFS from "react-native-fs";
import Voice from "@react-native-voice/voice";

const AddQuestionsContainer = memo(({ navigation, route }) => {
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

  return <AddQuestionsComponent backPress={backPress} />;
});

const mapStateToProps = ({ userSession }) => ({
  userData: userSession,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQuestionsContainer);
