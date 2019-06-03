import { StyleSheet } from 'react-native';

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize
} from '../../utils/Dimensions';

const colors = ['#516395', '#928DAB', '#EB3349', '#AA076B', '#003973'];

export default class StyleSheetFactory {
  static getSheet() {
    return StyleSheet.create({
      container: {
        flex: 1
      },
      TriangleShapeCSS: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: responsiveWidth(100),
        borderTopWidth: responsiveHeight(60),
        borderRightColor: 'transparent',
        borderTopColor: colors[(Math.random() * colors.length) | 0]
      },
      characterImage: {
        position: 'absolute',
        top: '22%',
        left: '26%',
        height: responsiveHeight(23),
        width: responsiveWidth(38),
        borderRadius: 300 / 2
      },
      characterName: {
        position: 'absolute',
        top: '50%',
        left: '29%',
        width: responsiveWidth(40),
        fontSize: responsiveFontSize(3),
        color: 'black'
      },
      characterInfoContainer: {
        flex: 1,
        marginTop: responsiveHeight(3),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginEnd: responsiveWidth(6)
      },
      subContainer: {
        alignItems: 'flex-end',
        alignItems: 'center',
        marginEnd: responsiveWidth(12)
      },
      title: {
        fontWeight: 'bold',
        width: responsiveWidth(35),
        marginBottom: 10,
        color: 'black',
        fontSize: responsiveFontSize(2.2)
      }
    });
  }
}
