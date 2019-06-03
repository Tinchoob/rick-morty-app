import { types } from './reducers';

export const useActions = (state, dispatch) => {
  const setInputValue = value => {
    dispatch({ type: types.SET_INPUT_VALUE, payload: value });
  };

  return {
    setInputValue
  };
};
