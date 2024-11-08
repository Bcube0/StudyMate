import React, { memo } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Colors, Fonts, Images } from "../../utils/Theme";
import Loader from "../../components/Loader";
import moment from "moment";

const ProfileComponent = memo((props) => {
  const joinedDate = moment(new Date()).format("MMMM D, YYYY");

  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <View style={styles.topView}>
        <View style={styles.blurContainer}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>StudyMate</Text>
            <TouchableOpacity>
              <Image source={Images.app_icon} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
          <Text style={styles.joinedText}>Joined on : {joinedDate}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.aboutUsSection}>
          <Text style={styles.aboutUsTitle}>About Us</Text>
          <Text style={styles.aboutUsDescription}>
            StudyMate is your ultimate study companion, designed to help
            students stay organized and excel academically. With StudyMate, you
            can create personalized folders and notes for each subject,
            enriching your learning experience by adding images and detailed
            descriptions to your notes. Our app also lets you set reminders,
            keeping you on track with your study schedule.{"\n\n"} To further
            boost your progress, StudyMate offers weekly quizzes, allowing you
            to test your knowledge and reinforce key concepts regularly. Whether
            you're organizing your notes or checking your understanding,
            StudyMate is here to help you stay focused, motivated, and on the
            path to success.
          </Text>
        </View>
      </ScrollView>
      <Text style={styles.appVersion}>App version: 2.0</Text>
    </View>
  );
});

export default ProfileComponent;
