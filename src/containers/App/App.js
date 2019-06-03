/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Root from '../Root/index';
import { StoreProvider } from '../../context/StoreContext';

export default class App extends Component {
  render() {
    return (
      <StoreProvider>
        <Root />
      </StoreProvider>
    );
  }
}
