/**
 * created by hushicai on 2018/3/15
 */

import {Platform} from 'react-native';
import isIPhoneXLike from './isIPhoneXLike';
import isIPhoneXRLike from './isIPhoneXRLike';

// iPhoneX以上机型
export const isIPhoneXAbove =
  Platform.OS === 'ios' && (isIPhoneXLike || isIPhoneXRLike);
