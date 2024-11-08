import React, { memo, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Images } from "../../utils/Theme";
import styles from "./styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Add AsyncStorage for saving the score

const QuizTwoComponent = memo((props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [remainingTime, setRemainingTime] = useState(1800); // 30 minutes in seconds
  const [timerId, setTimerId] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for API call

  useEffect(() => {
    fetchQuizData(); // Fetch questions when the component mounts
    const id = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id);
          handleTimerExpiry();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    setTimerId(id);

    return () => clearInterval(id); // Cleanup timer on unmount
  }, []);

  const fetchQuizData = async () => {
    try {
      const response = await axios.get(
        "https://test-que.onrender.com/questions"
      );
      console.log("response", JSON.stringify(response));

      // Filter questions to include only those in the "food" category
      const filteredData = response?.data.data?.filter(
        (item) => item?.category === "cyber"
      );

      // Map the filtered questions to extract relevant data
      const formattedData = filteredData?.map((item) => ({
        question: item?.question,
        options: item?.answer.map((option) => option.value), // Extract values of answers
        answer: item?.answer.find((option) => option.isCorrect)?.value || "", // Find the correct answer
      }));

      setQuizData(formattedData); // Set the formatted data
      setLoading(false); // Stop loading once data is set
    } catch (error) {
      console.error("Failed to fetch quiz data", error);
      setLoading(false);
    }
  };

  const handleTimerExpiry = () => {
    // Logic for when timer expires
    saveScore(score); // Save score before navigating
    props?.backPress;
  };

  const handleNext = () => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalScore =
        score + (selectedAnswer === quizData[currentQuestion].answer ? 1 : 0);
      setShowModal(true);
      saveScore(finalScore);
    }
  };

  const saveScore = async (finalScore) => {
    try {
      await AsyncStorage.removeItem("quizTwoScore");
      await AsyncStorage.setItem("quizTwoScore", finalScore.toString());
      console.log("New score saved:", finalScore);
    } catch (error) {
      console.error("Failed to save score", error);
    }
  };

  if (loading) {
    return (
      <View style={styles.Loadercontainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={props?.backPress}
          style={[
            styles.backButton,
            { opacity: remainingTime === 0 ? 1 : 0.5 },
          ]}
          disabled={remainingTime > 0} // Disable back button if time is running
        >
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Quiz ({currentQuestion + 1}/{quizData.length})
        </Text>
        <Text style={styles.timerText}>
          {Math.floor(remainingTime / 60)}:
          {(remainingTime % 60).toString().padStart(2, "0")}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.quizContainer}>
        <Text style={styles.question}>
          {quizData[currentQuestion]?.question}
        </Text>
        {quizData[currentQuestion]?.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === option && styles.selectedOption,
            ]}
            onPress={() => setSelectedAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={handleNext}
          style={styles.nextButton}
          disabled={!selectedAnswer}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Quiz Completed!</Text>
            <Text style={styles.modalText}>
              Your Score: {score}/{quizData.length}
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setShowModal(false);
                props.backPress();
              }}
            >
              <Text style={styles.modalButtonText}>Go to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
});

export default QuizTwoComponent;
