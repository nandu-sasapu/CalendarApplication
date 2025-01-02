const initialState = [];

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPANY":
      return [...state, action.payload];
    case "DELETE_COMPANY":
      return state.filter((company) => company.id !== action.payload);
    default:
      return state;
  }
};

export default companyReducer;
