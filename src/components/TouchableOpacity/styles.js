import {StyleSheet, Dimensions} from 'react-native';
import { Colors,Constants, Fonts, Sizes } from '../../utils/Theme';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  submitButton: {
    borderRadius: 8,
    height: 56,
    width: "100%",
    backgroundColor: Colors.Main,
    justifyContent:"center",
    alignItems:"center"
  },
  submitText: {
    color: Colors.White_FFFFFF,
    fontSize: Sizes.Regular,
    fontFamily: Fonts.SemiBold,
  },
});
