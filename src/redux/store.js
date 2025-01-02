import { combineReducers } from "redux";
import companyReducer from "./reducers/companyReducer";
import communicationReducer from "./reducers/communicationReducer";

const rootReducer = combineReducers({
  companies: companyReducer,
  communications: communicationReducer,
  
});

const store = combineReducers(rootReducer);

export default store;
