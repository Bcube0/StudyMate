import {Platform} from 'react-native';

export default {
  baseUrl: 'http://13.237.24.54:5000/api',
  isIos: Platform.OS == 'ios',
  reg: {
    regPass: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/,
    regUser:
      /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/,
    regName: /^[A-Za-z]+$/,
    regPan: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
    regEmail: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    regBankno: /^\d{12,16}$/,
    regIfsc: /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/,
    regNumber: /^[0-9]+$/,
    regPincode: /^([0-9]){6}$/,
    regMobile: /^([0-9]){12}$/,
    regPercentage: /^[1-9][0-9]?$|^100$/,
  },
  appVersion:
    Platform.OS == 'ios'
      ? 'Version 1.3(26) Prod Build'
      : 'Version 1.3(26) Prod Build',
};
