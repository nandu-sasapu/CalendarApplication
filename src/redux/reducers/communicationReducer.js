const initialState = [];

const communicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_COMMUNICATION":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default communicationReducer;
