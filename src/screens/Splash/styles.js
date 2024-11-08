import {StyleSheet} from 'react-native';
import {Colors,Sizes} from '../../utils/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White_FFFFFF,
  },
  img_bg: {
    width: Sizes.ScreenWidth,
    height: Sizes.ScreenHeight,
    color:Colors.Black_000000
  },
});
