import { StyleSheet, Platform, Dimensions } from 'react-native';
import colors from '../globals/colors';
import fonts from '../globals/fonts';
import sizes from './Sizes';
import { Colors, Fonts } from './Theme';
const { height, width } = Dimensions.get('window');
export default StyleSheet.create({
  
  containerStylesText: { marginTop: 10, backgroundColor: colors.white },
  containerStylesText2: { flex:1,marginTop: 20, backgroundColor: colors.white },

  labelStylesText: {
    fontSize: sizes.small,
    fontFamily: fonts.Regular,
    color: colors.textLabel,
    backgroundColor: colors.White_FFFFFF,
    marginLeft: 30,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: -8,
    position: 'absolute'
  },
  labelStylesTextError: {
    fontSize: sizes.small,
    fontFamily: fonts.Regular,
    color: colors.redColor,
    backgroundColor: colors.white,
    marginLeft: 20,
    paddingTop: 5,
  },
  labelStylesTextError2: {
    fontSize: sizes.small,
    fontFamily: fonts.Regular,
    color: colors.redColor,
    backgroundColor: colors.white,
    marginLeft: 20,
    paddingTop: 5,
  },
  labelStylesTextErrorLogin: {
    fontSize: sizes.Small,
    fontFamily: fonts.Regular,
    color: colors.Red_FF0000,
  },
  labelStylesTextErrorOtherScreen: {
    fontSize: sizes.Small,
    fontFamily: fonts.Regular,
    color: colors.Red_FF0000,
    marginTop:-15,
    marginLeft: 20,
  },
  labelStylesTextErrorOtherScreenTwo:{
    fontSize: sizes.Small,
    fontFamily: fonts.Regular,
    color: colors.Red_FF0000,
    // marginTop:-5,
  },
  inputStylesText: {
    marginLeft: 16,
    marginRight: 16,
    height: 45, borderColor: colors.textBorder,
    borderWidth: 1,
    borderRadius: 8,
    color: colors.black,
    paddingHorizontal: 15,
    fontSize: sizes.size_14,
    fontFamily: fonts.Regular,
  },
  inputStylesText1: {
    marginLeft: 20,
    marginRight: 20,
    height: 45, borderColor: colors.textBorder,
    borderWidth: 1,
    borderRadius: 8,
    color: colors.black,
    paddingHorizontal: 15,
    fontSize: sizes.size_14,
    fontFamily: fonts.Regular,
  },
  inputStylesTextBigBox: {
    marginLeft: 16,
    marginRight: 16,
    height: 95, borderColor: colors.textBorder,
    borderWidth: 1,
    borderRadius: 8,
    color: colors.black,
    paddingHorizontal: 15,
    fontSize: sizes.size_14,
    fontFamily: fonts.Regular,
  },

  dobText: {
    width:250,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    // borderBottomColor: colors.bottomBorder,
    color: colors.black,
    textAlign: 'left',
    fontSize: sizes.small,
    fontFamily: fonts.medium,
  },
  dateInput: {
    marginLeft: 0,
    marginRight: 0,
    borderWidth:0,
    alignItems: 'flex-start',
    color: colors.black,
    fontFamily: fonts.Regular,
    fontSize: sizes.small,

    
  },
  placeholderText: {
    marginLeft: Platform.OS == 'ios' ? 0 : 4,
    marginRight: 0,
    borderWidth:0,
    alignItems: 'flex-start',
    fontFamily: fonts.Regular,
    fontSize: sizes.small,
    color:colors.hint_color
    
  },
  dateText: {
    marginLeft: 0,
    marginRight: 0,
    borderWidth:0,
    alignItems: 'flex-start',
    color: colors.black,
    fontFamily: fonts.Regular,
    fontSize: sizes.regular,

    
  },
  dateTextImage: {
    position:'absolute',
    marginTop:10,
    marginLeft:width-65,
    resizeMode: 'contain'
  },
  dateTextImage1: {
    position:'absolute',
    marginTop:10,
    marginLeft:width-70,
    resizeMode: 'contain'
  },
  dropImage: {
    position:'absolute',
    marginTop:15,
    height:7,
    width:16,
    // resizeMode: 'contain',
    marginLeft:width-70
  },

  uploadImage: {
    position:'absolute',
    marginTop:5,
    height:16,
    width:23,
    resizeMode: 'contain',
    marginLeft:width-100,
  },

  inputIOS: {
    width: width - 90,
    color: colors.black,
    // marginLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    marginTop:10,
    fontSize: sizes.regular,
    fontFamily: fonts.Regular,
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
  },
  inputAndroid: {
    width: width - 90,
    color: colors.black,
    // marginLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    marginTop:10,
    fontSize: sizes.regular,
    fontFamily: fonts.Regular,
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.gray,
  },

  printButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: sizes.regularLarge,
    height: 40,
    width: '100%',
    marginTop:0,
    alignSelf: 'center',
    backgroundColor: colors.main,

  },
  printText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 15,
  
  },
  inputStylesText11: {
    marginLeft: 16,
    marginRight: 16,
    height: 45, borderColor: Colors.placeholder,
    borderWidth: 1,
    borderRadius: 8,
    color: Colors.Black_000000,
    paddingHorizontal: 15,
    fontSize:sizes.Medium,
    fontFamily: Fonts.Regular,
  },

});
