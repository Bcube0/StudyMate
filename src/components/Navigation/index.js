import React, {useRef} from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import images from '../../globals/images';
import {NavgationStyles, Images, Colors} from '../../utils/Theme';
import {PercentageBar, Constants} from '../../utils/Theme';
import styles from '../TouchableOpacity/styles';

function LogoTitleMain(navigation) {
  return (
    <View style={NavgationStyles.centerView}>
      <Text style={NavgationStyles.textMain}>
        {navigation.titleString ? navigation.titleString : ''}
      </Text>
    </View>
  );
}

const accountNavigation = (navigation, notificationPress, notification) => {
  navigation.setOptions({
    headerTitle: () => <LogoTitleMain {...navigation} />,
    // headerLeft: () => (
    //   <TouchableOpacity onPress={() => navigation.openDrawer()}>
    //     <Image
    //       source={Images.blackmenu}
    //       style={NavgationStyles.menuLogoStyle}
    //     />
    //   </TouchableOpacity>
    // ),
    headerStyle: {
      backgroundColor: '#6200EA', // Match the primary color used in HomeComponent
      borderBottomWidth: 0,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    headerTintColor: '#FFFFFF', // White text for better contrast
    headerShown: true,
  });
};

export default {
  accountNavigation,
};
