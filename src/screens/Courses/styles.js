import { StyleSheet, Dimensions } from "react-native";
import { Colors, Sizes, Fonts } from "../../utils/Theme";
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Main, // Light background color for the whole screen
  },
  topView: {
    backgroundColor: Colors.cardColor, // Light background color for the whole screen
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
  },
  bannerText: {
    color: "#FFFFFF",
    fontSize: 28,
    // fontFamily: Fonts.YellowGinger,
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
    fontSize: 20,
    // fontFamily: Fonts.MontezRegular,
    marginTop: -20,
  },
  folderItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#E0E7FF",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  folderIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  folderDetails: {
    flex: 1,
  },

  createFolderButton: {
    backgroundColor: Colors.White_FFFFFF,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    height: 40,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  createFolderButtonText: {
    color: Colors.Main,
    fontSize: 16,
    // fontFamily: Fonts.YellowGinger,
  },
  createFolderContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  folderInput: {
    flex: 1,
    borderColor: "#6200EA",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "#6200EA",
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  noFoldersContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFoldersText: {
    fontSize: 18,
    color: "#888888",
    textAlign: "center",
  },
  // Added listContainer style
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: Colors.cardColor,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalMessage: {
    marginVertical: 10,
    textAlign: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    justifyContent: "center",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f44336", // Red color for delete button
    marginHorizontal: 5,
    flex: 1,
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  modalContainer11: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent11: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancelButton: {
    color: "#FFCC00",
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  doneButton: {
    color: "#FFCC00",
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  folderInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  clearButton: {
    padding: 5,
  },
  clearButtonText: {
    fontSize: 18,
    color: "#999",
  },
  smartFolderContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  smartFolderIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  smartFolderText: {
    fontSize: 16,
    color: "#000",
  },
  folderGridItem: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
    borderRadius: 8,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // elevation: 3,
  },
  gridListContainer: {
    paddingHorizontal: 10,
  },
  folderIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  folderDetails: {
    alignItems: "center",
  },
  folderTitle: {
    fontSize: 20,
    color: Colors.White_FFFFFF,
    // fontFamily: Fonts.akaDora,
  },
  fileCount: {
    fontSize: 14,
    color: "#888",
    // fontFamily: Fonts.akaDora,
  },
});
