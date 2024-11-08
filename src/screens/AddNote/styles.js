import { StyleSheet, Dimensions } from "react-native";
import { Colors, Sizes, Fonts } from "../../utils/Theme";
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Main, // Light background color for the whole screen
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.cardColor, // Light background color for the whole screen
    padding: 15,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 28,
    height: 28,
    tintColor: "#FFF",
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: Fonts.Bold,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#FFF",
  },
  blurContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  bannerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  bannerText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: "cover",
  },
  topView: {
    backgroundColor: "#F3F3F3", // Light background color for the whole screen
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  headerContainer: {
    backgroundColor: "#6200EA", // Primary color
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  scrollViewContent: {
    padding: 15,
  },
  input: {
    height: 50,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: Colors.White_FFFFFF,
    // fontFamily: Fonts.Italic,
  },
  descriptionInput: {
    height: 100,
  },
  uploadSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: Colors.cardColor,
    height: 50,
    padding: 10,
    borderRadius: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  uploadText: {
    fontSize: 16,
    color: Colors.White_FFFFFF,
    marginLeft: 20,
    // fontFamily: Fonts.YellowGinger,
  },
  fileNameText: {
    marginTop: 5,
    fontSize: 14,
    margin: 8,
    color: Colors.White_FFFFFF,
    // fontFamily: Fonts.MontezRegular,
  },
  addButtonContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  addButton: {
    backgroundColor: Colors.cardColor,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  addButtonText: {
    color: Colors.Main, // Light background color for the whole screen
    fontSize: 18,
    // fontFamily: Fonts.YellowGinger,
  },
  reminderSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginTop: 20,
  },
  reminderText: {
    fontSize: 16,
    color: Colors.White_FFFFFF,
    marginLeft: 10,
    // fontFamily: Fonts.MontezRegular,
  },
  icon: {
    width: 24,
    height: 24,
  },
  selectedImage: {
    width: 200,
    height: 200,
  },
  containerMIc: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    fontSize: 14,
    marginBottom: 20,
    color: Colors.White_FFFFFF,
    // fontFamily: Fonts.MontezRegular,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  iconButton: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
  },
  micStyle: {
    width: 40,
    height: 40,
  },
});
