import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { ValidationMessages } from '../../utils/Theme';
import {Validators} from '../../utils/Validators';
import ForgotPasswordComponent from './ForgotPasswordComponent';
import * as userActions from '../../redux/actions/userActions';


const ForgotPasswordContainer = props => {
  const {navigation,apiUserForgotPassword} = props;
  const [isLoading, setLoading] = React.useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const onFocusEmail = () => setIsFocusedEmail(true);
  const onBlurEmail = () => setIsFocusedEmail(false);

  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const onFocusPassword = () => setIsFocusedPassword(true);
  const onBlurPassword = () => setIsFocusedPassword(false);

  

 



  const sendOtpButtonPress = async () => {
    if (checkValidation()) {
      apiPostForgotPasswordCall()
    }
  };

  const [email, setEmail] = useState('');
  const [emailV, setEmailV] = useState('');
  const setEmailData = value => {
    setEmail(value);
    var mobileNumberTemp = '';
    setEmailV(mobileNumberTemp);
  };

  const checkValidation = () => {
    var emailTemp = '';
    if (Validators.isEmpty(email)) {
      emailTemp = ValidationMessages.email;
    } else if (!Validators.validEmail(email)) {
      emailTemp = ValidationMessages.emailV;
    }
    setEmailV(emailTemp);
    if (emailTemp == '') {
      return true;
    } else {
      return false;
    }
  };

  const apiPostForgotPasswordCall = async () => {
      var request = {
        email: email,
      };
      console.log('apiUserForgotPassword Request ' + JSON.stringify(request));
      setLoading(true);
      await apiUserForgotPassword(request)
        .then(async response => {
          var data_response = response.payload.data;
          console.log(
            'apiUserForgotPassword Response ' + JSON.stringify(data_response),
          );
          if (data_response?.success) {
            ShowAlert(data_response.message);
            setLoading(false);
            setEmail('');
          } else {
            setLoading(false);
            ShowAlert(data_response.message);
          }
        })
        .catch(error => {
          console.log(error);
          ShowAlert(data_response.message);
          setLoading(false);
        });
  };

  const backBlueButtonPress = () => {
    navigation.goBack();

  }

  return (
    <ForgotPasswordComponent
      props={props}
      isLoading={isLoading}
      sendOtpButtonPress={sendOtpButtonPress}
      checkValidation={checkValidation}
      setEmailData={setEmailData}
      email={email}
      emailV={emailV}
      isFocusedEmail={isFocusedEmail}
      onFocusEmail={onFocusEmail}
      onBlurEmail={onBlurEmail}
      isFocusedPassword={isFocusedPassword}
      onFocusPassword={onFocusPassword}
      onBlurPassword={onBlurPassword}
      backBlueButtonPress={backBlueButtonPress}
    />
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  apiUserForgotPassword: params => dispatch(userActions.apiUserForgotPassword(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);
