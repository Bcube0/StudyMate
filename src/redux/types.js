export const createTypes = (namespace, type) => [
  `${namespace}/${type}_REQUEST`,
  `${namespace}/${type}_SUCCESS`,
  `${namespace}/${type}_FAIL`,
];

const commonActionNameSpaceAPI_OTP_VERIFY =
  'commonActionNameSpaceAPI_OTP_VERIFY';
const commonActionNameSpaceAPI_HOME_SCREEN =
  'commonActionNameSpaceAPI_HOME_SCREEN';
const commonActionNameSpaceSAVEPASS = 'commonActionNameSpaceSAVEPASS';
const commonActionNameSpaceCLEAR_USER_SESSION =
  'commonActionNameSpaceCLEAR_USER_SESSION';
