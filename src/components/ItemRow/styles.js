import { StyleSheet } from 'react-native';

import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight
} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  itemContainer: {
    width: '90%',
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row'
  },
  itemImage: {
    height: responsiveHeight(16),
    width: responsiveWidth(28)
  },
  itemTitle: {
    fontSize: responsiveFontSize(2.6),
    width: responsiveWidth(40),
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  textContainer: {
    flexDirection: 'column',
    marginStart: 10,
    justifyContent: 'center'
  },
  itemStatus: {
    fontSize: responsiveFontSize(2),
    alignSelf: 'center',
    marginTop: 15
  }
});

export default styles;
