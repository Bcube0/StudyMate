import React, {memo} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {Colors, Images} from '../../utils/Theme';
import Loader from '../../components/Loader';
import {GlobalStyles} from '../../utils/Theme';
import Touchable from '../../components/TouchableOpacity';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ForgotPasswordComponent = memo(props => {
  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <KeyboardAwareScrollView
        enableOnAndroid={false}
        extraScrollHeight={100}
        enableAutomaticScroll={true}
        keyboardShouldPersistTaps="handled"
        style={styles.keyBordContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1}}>
            <ImageBackground source={Images.login_bg} style={styles.mainScreen}>
            <TouchableOpacity onPress={() => props.backBlueButtonPress()} style={styles.backButtonView}>
                <Image source={Images.backBlue} style={styles.backBlueLogoStyle} />
              </TouchableOpacity>
              <Image source={Images.splash_logo} style={styles.logo} />
              <View style={styles.loginView}>
                <View style={styles.centerView}>
                  <Text style={styles.mobileTextStyle}>
                    {'Forgot password?'}
                  </Text>
                  <Text style={styles.headerTwoText}>Please enter your Email Address to receive OTP.</Text>
                  <View style={styles.textInputView}>
                    {props.isFocusedEmail ? (
                      <Text style={styles.mobileNumberText}>Email</Text>
                    ) : null}
                    <TextInput
                      style={styles.textInputStyle}
                      placeholder="Email"
                      placeholderTextColor={Colors.gray}
                      value={props.email}
                      onFocus={props.onFocusEmail}
                      onBlur={props.onBlurEmail}
                      onChangeText={value => {
                        props.setEmailData(value);
                      }}
                    />
                  </View>
                  {props.emailV != '' ? (
                    <View style={styles.validationViewStyle}>
                      <Text style={GlobalStyles.labelStylesTextErrorLogin}>
                        {props.emailV}
                      </Text>
                    </View>
                  ) : null}
                  <View style={styles.submitButtonPressStyle}>
                    <Touchable
                      title="Send OTP"
                      onPressSubmit={() => props.sendOtpButtonPress()}
                    />
                  </View>
                </View>
             
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
});

export default ForgotPasswordComponent;
