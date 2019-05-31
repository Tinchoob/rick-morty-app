import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

// Get a percentage of height and width based on device size//
const responsiveHeight = percentage => (percentage / 100) * height;
const responsiveWidth = percentage => (percentage / 100) * width;

const responsiveFontSize = f => {
  const tempHeight = (16 / 9) * width;

  return Math.sqrt(tempHeight ** 2 + width ** 2) * (f / 100);
};

export { responsiveHeight, responsiveWidth, responsiveFontSize };
