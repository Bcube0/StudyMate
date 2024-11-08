import { StyleSheet, Dimensions } from "react-native";
import { Colors, Sizes, Fonts } from "../../utils/Theme";
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Main, // Light background color for the whole screen
  },
  topView: {
    backgroundColor: Colors.cardColor, // Primary color for the top banner
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    height: 180,
  },
  blurContainer: {
    // alignItems: "center",
    marginBottom: 10,
  },
  bannerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 15,
  },
  bannerText: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: Fonts.Bold,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: "cover",
  },
  bottomText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  scrollViewContent: {
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },

  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  userEmail: {
    fontSize: 16,
    color: Colors.gray,
  },
  userJoinedDate: {
    fontSize: 14,
    color: Colors.lightGray,
    marginTop: 5,
  },
  appVersion: {
    fontSize: 12,
    color: Colors.White_FFFFFF,
    margin: 10,
    textAlign: "center",
  },
  aboutUsSection: {
    // padding: 15,
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
  },

  aboutUsTitle: {
    fontSize: 28,
    // fontFamily: Fonts.akaDora,
    marginBottom: 10,
    color: Colors.White_FFFFFF,
  },

  aboutUsDescription: {
    fontSize: 14,
    color: Colors.White_FFFFFF,
    lineHeight: 20,
    // fontFamily: Fonts.Italic,
  },
  joinedText: {
    fontSize: 16,
    color: Colors.White_FFFFFF,
    // textAlign: "center",
    // marginVertical: 10,
    // fontFamily: Fonts.akaDora,
    marginTop: -20,
  },
});
