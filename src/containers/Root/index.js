/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import AppNavigator from '../../navigation/navigator';

export default class Root extends Component {
  render() {
    return <AppNavigator />;
  }
}
