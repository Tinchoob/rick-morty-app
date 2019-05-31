import { StyleSheet } from 'react-native';
import colors from '../../containers/Root/styles';

import { responsiveWidth, responsiveFontSize } from '../../utils/Dimensions';

const styles = StyleSheet.create({
  itemContainer: {
    width: '90%',
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10
  },
  itemTitle: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  itemStatus: {
    fontSize: responsiveFontSize(1.5),

    alignSelf: 'center'
  }
});

export default styles;
