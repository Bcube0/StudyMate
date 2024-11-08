import React, { memo, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { Alert, BackHandler } from "react-native";
import QuizComponent from "./QuizComponent";

const QuizContainer = memo(({ navigation, route }) => {
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

  const addQuestions = () => {
    navigation.navigate("AddQuestionsContainer");
  };

  return <QuizComponent backPress={backPress} addQuestions={addQuestions} />;
});

const mapStateToProps = ({ userSession }) => ({
  userData: userSession,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
