import {Dimensions} from 'react-native';

// @see: https://mydevice.io/devices/
// iPhoneXR XsMax
const XR_WIDTH = 414;
const XR_HEIGHT = 896;
const {height: D_HEIGHT, width: D_WIDTH} = Dimensions.get('screen');

const isIPhoneXRLike =
  (D_HEIGHT === XR_HEIGHT && D_WIDTH === XR_WIDTH) ||
  (D_HEIGHT === XR_WIDTH && D_WIDTH === XR_HEIGHT);

export default isIPhoneXRLike;
