import { StyleSheet } from 'react-native';

import { responsiveWidth } from '../../utils/Dimensions';

const styles = StyleSheet.create({
  searchBar: {
    width: '60%',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row'
  },
  textInput: {
    maxWidth: responsiveWidth(43)
  },
  searchButton: {
    marginStart: 10,
    width: '20%',
    justifyContent: 'center'
  }
});

export default styles;
