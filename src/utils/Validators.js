import {Platform} from 'react-native';
class Validators {
  static validEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  static validIfsc(ifsc) {
    const re = /^[A-Z]{4}\d{7}$/;
    return re.test(ifsc);
  }

  static validPassword(password) {
    if (password.length >= 8) {
      return false;
    }
    return true;
  }

  static validPhoneNumber(number) {
    const re =
      /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
    if (!re.test(number)) {
      return false;
    }
    return true;
  }
  // static validPhoneNumberNew(number) {
  //   const re = /^([0-9]){10}$/;
  //   if (!re.test(number)) {
  //     return false;
  //   }
  //   return true;
  // }

  static validPhoneNumberNew(number) {
    // Regex pattern for Australian mobile number: starts with '04' followed by 8 digits
    const re = /^04\d{8}$/;
    return re.test(number);
  }

  static validABN(ABN) {
    if (ABN.length == 11) {
      return true;
    }
    return false;
  }
  

  static validOtp(number){
    if (number.length >= 4) {
      return true;
    }
    return false;
  }

  static nameLength(string){
    if (string.length >= 3) {
      return true;
    }
    return false;
  }

  static validPinCode(number) {
    if (number.length == 4) {
      return true;
    }
    return false;
}

  static validMobileNumber(number) {
    if (number.length >= 10) {
      return true;
    }
    return false;
  }

  
  static isEmpty(name) {
    var temp = String(name)
    if (temp && temp?.trim() != '') {
      return false;
    }
    return true;
  }

  static onlyAlphabets(value) {
    const flag = /[^0-9\s]|^\S+$]/;
    return flag.test(value);
  }

  static isPasswordSmatich(password, repeatPassword) {
    if (password != repeatPassword) {
      return true;
    }
    return false;
  }
  static isValidPassword(value) {
    // Password must contain one uppercase letter, one lower case letter, one special symbol, and in range of 4 - 8 char long.
    const flag = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
    return flag.test(value);
  }
  static platform() {
    let platform;
    if (Platform.OS === 'ios') {
      platform = 'ios';
    } else {
      platform = 'android';
    }
    return platform;
  }

  // static formatDob  (dob){
  //   const dateObj = new Date(dob);
  //   const formattedDate = `${String(dateObj.getDate()).padStart(2, '0')}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${dateObj.getFullYear()}`;
  //   return formattedDate;
  // }

  static formatDob(dob) {
    if (!dob) return ""; // Handle case where dob is null or undefined
    const dateObj = new Date(dob);
    if (isNaN(dateObj.getTime())) return ""; // Handle case where dob is an invalid date
    const formattedDate = `${String(dateObj.getDate()).padStart(2, '0')}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${dateObj.getFullYear()}`;
    return formattedDate;
  }
  
}


export {Validators};
