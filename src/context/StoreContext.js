import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

import { initialState, reducer } from './reducers';
import { useActions } from './actions';

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  // Get state and dispatch from Reacts new API useReducer.
  const [state, dispatch] = useReducer(reducer, initialState);
  // Get actions from useActions and pass it to Context
  const actions = useActions(state, dispatch);

  // Render state, dispatch and special case actions
  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreContext.propTypes = {
  children: PropTypes.object.isRequired
};

export { StoreContext, StoreProvider };
