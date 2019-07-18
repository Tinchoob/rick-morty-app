const initialState = {
  inputValue: ''
};

const types = {
  SET_INPUT_VALUE: 'SET_INPUT_VALUE'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_INPUT_VALUE:
      return {
        inputValue: action.payload
      };

    default:
      throw new Error('Unexpected action');
  }
};

export { initialState, types, reducer };
