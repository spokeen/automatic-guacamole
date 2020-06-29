import {Dimensions} from 'react-native';

// @see: https://mydevice.io/devices/
// iPhoneX Xs
const X_WIDTH = 375;
const X_HEIGHT = 812;
const {height: D_HEIGHT, width: D_WIDTH} = Dimensions.get('screen');

const isIPhoneXLike =
  (D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
  (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT);

export default isIPhoneXLike;
