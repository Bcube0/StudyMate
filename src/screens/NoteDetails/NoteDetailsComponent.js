import React, { memo } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Images } from "../../utils/Theme";
import styles from "./styles";
import moment from "moment";

const NoteDetailsComponent = memo((props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={props?.backPress} style={styles.backButton}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{props?.data?.item?.title}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.detailSection}>
          <Text style={styles.label}>Description :</Text>
          <Text style={styles.value}>
            {props?.data?.item?.description || "No Description"}
          </Text>
        </View>

        {props?.data?.item?.image && (
          <View style={styles.imageSection}>
            <Text style={styles.label}>Attached Image :</Text>
            <Image
              source={{ uri: `file://${props?.data?.item?.image}` }} // Display the saved image
              style={{ width: 200, height: 200 }} // Customize image size
            />
          </View>
        )}
        <View style={styles.detailSection}>
          <Text style={styles.label}>Voice Text :</Text>
          <Text style={styles.value}>
            {props?.data?.item?.voiceText || "No Voice Text"}
          </Text>
        </View>

        {/* Button to Convert Text to Speech */}
        {/* {props?.props?.data?.item?.voiceText ? ( */}

        {props?.data?.item?.reminderDate && (
          <View style={styles.reminderSection}>
            <Text style={styles.label}>Reminder :</Text>
            <Text style={styles.reminderText}>
              {moment(props?.data?.item?.reminderDate).format(
                "MMMM DD YYYY, h:mm:A"
              )}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
});

export default NoteDetailsComponent;
