/* eslint-disable consistent-return */
const initialState = {
  inputValue: ''
};

const types = {
  SET_INPUT_VALUE: 'SET_INPUT_VALUE'
};

const reducer = (state = initialState, action) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case types.SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      };

    default:
      throw new Error('Unexpected action');
  }
};
export { initialState, types, reducer };
