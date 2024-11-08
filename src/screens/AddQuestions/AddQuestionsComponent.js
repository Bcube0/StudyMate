import React, { memo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // Import Picker component
import { Images } from "../../utils/Theme";
import styles from "./styles";
import axios from "axios";

const AddQuestionsComponent = memo((props) => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [category, setCategory] = useState(""); // State for category

  const validateInputs = () => {
    if (!question.trim()) {
      Alert.alert("Validation Error", "Please enter a question.");
      return false;
    }
    if (
      !option1.trim() ||
      !option2.trim() ||
      !option3.trim() ||
      !option4.trim()
    ) {
      Alert.alert("Validation Error", "Please fill in all options.");
      return false;
    }
    if (![option1, option2, option3, option4].includes(correctOption)) {
      Alert.alert(
        "Validation Error",
        "Correct option must match one of the provided options."
      );
      return false;
    }
    if (!category) {
      Alert.alert("Validation Error", "Please select a category.");
      return false;
    }
    return true;
  };

  const handleAddQuestion = async () => {
    if (!validateInputs()) return; // Exit if validation fails
    const answers = [
      { value: option1, isCorrect: option1 === correctOption },
      { value: option2, isCorrect: option2 === correctOption },
      { value: option3, isCorrect: option3 === correctOption },
      { value: option4, isCorrect: option4 === correctOption },
    ];

    const payload = { question, category, answers }; // Include category in payload

    console.log("payload", JSON.stringify(payload));
    try {
      const response = await axios.post(
        "https://test-que.onrender.com/question",
        payload
      );
      Alert.alert(
        "Success",
        "Question added successfully!\nAdd new question."
      );
      // Clear all fields after successful addition
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setCorrectOption("");
      setCategory(""); // Clear the category field
    } catch (error) {
      console.error("Error adding question:", error);
      Alert.alert("Error", "Failed to add question. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={props?.backPress} style={styles.backButton}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{"Add Question"}</Text>
      </View>
      <ScrollView>
        <View style={styles.container11}>
          <Text style={styles.title}>Add a New Question</Text>
          <Text style={styles.inputLabel}>Category</Text>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.input} // Add picker styles if needed
          >
            <Picker.Item label="Select a category" value="" />
            <Picker.Item label="Network" value="network" />
            <Picker.Item label="Cyber" value="cyber" />
          </Picker>

          <TextInput
            placeholder="Question"
            value={question}
            onChangeText={setQuestion}
            style={styles.input}
          />

          <TextInput
            placeholder="Option 1"
            value={option1}
            onChangeText={setOption1}
            style={styles.input}
          />
          <TextInput
            placeholder="Option 2"
            value={option2}
            onChangeText={setOption2}
            style={styles.input}
          />
          <TextInput
            placeholder="Option 3"
            value={option3}
            onChangeText={setOption3}
            style={styles.input}
          />
          <TextInput
            placeholder="Option 4"
            value={option4}
            onChangeText={setOption4}
            style={styles.input}
          />
          <TextInput
            placeholder="Correct Option"
            value={correctOption}
            onChangeText={setCorrectOption}
            style={styles.input}
          />
          <View style={styles.addButtonContainer}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddQuestion}
            >
              <Text style={styles.addButtonText}>{"Add Question"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
});

export default AddQuestionsComponent;
