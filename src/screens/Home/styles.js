import { StyleSheet, Dimensions } from "react-native";
import colors from "../../globals/colors";
import { Colors, Sizes, Fonts, Constants } from "../../utils/Theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Main, // Light background color for the whole screen
  },
  topView: {
    height: 180,
    backgroundColor: Colors.cardColor, // Light background color for the whole screen
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  blurContainer: {
    width: "90%",
    height: "80%",
    backgroundColor: Colors.Main, // Light background color for the whole screen
    borderRadius: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  bannerText: {
    fontSize: 28,
    color: "#fff",
    fontFamily: Fonts.Bold,
    fontWeight: "900",
    // fontFamily: Fonts.YellowGinger,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#4A90E2",
    resizeMode: "stretch",
  },
  bottomText: {
    fontSize: 24,
    color: "#fff",
    // fontFamily: Fonts.akaDora,
  },
  scrollView: {
    marginVertical: 20,
  },
  sectionContainer: {
    backgroundColor: Colors.White_FFFFFF,
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: Fonts.Bold,
    color: Colors.Black_000000,
  },
  listContainer: {
    paddingBottom: 10,
  },
  noteItemContainer: {
    backgroundColor: "#73bfdc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  reminderIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  quizItem: {
    backgroundColor: "#73bfdc",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
  },
  quizTitle: {
    fontSize: 24,
    color: "#333333",
    // fontFamily: Fonts.akaDora,
  },
  quizDate: {
    fontSize: 18,
    color: "#666666",
    marginTop: 5,
    // fontFamily: Fonts.MontezRegular,
  },
  startQuizButton: {
    marginTop: 10,
    backgroundColor: Colors.Main,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    // fontWeight: "bold",
    // fontFamily: Fonts.YellowGinger,
  },
  scoreContainer: {
    backgroundColor: Colors.cardSection,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  scoreText: {
    fontSize: 14,
    color: "#333333",
  },
  noNotesContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  noNotesText: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10,
    // fontFamily: Fonts.MontezRegular,
  },
  noNotesImage: {
    width: 100,
    height: 100,
  },
  noScoreText: {
    fontSize: 18,
    color: "#666666",
    textAlign: "center",
    // fontFamily: Fonts.MontezRegular,
  },
  scrollView: {
    flex: 1,
  },

  listContainer: {
    paddingBottom: 20,
  },
  noteItemContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    padding: 15,
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    // Aspect ratio to keep the grid items squared
    aspectRatio: 1,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // Shadow for Android
    elevation: 3,
  },
  noteTitle: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 5,
    fontFamily: Fonts.Bold,
  },
  noteDescription: {
    fontSize: 18,
    color: "#fff",
    flex: 1,
    // fontFamily: Fonts.LoversQuarrelRegular,
  },
  reminderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  reminderIcon: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  reminderText: {
    fontSize: 14,
    color: "#fff",
    // fontFamily: Fonts.MontezRegular,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  startQuizButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  addQuestionButton: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
