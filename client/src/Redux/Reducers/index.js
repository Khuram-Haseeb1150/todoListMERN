import { combineReducers } from "redux";


import FirstReducer from "./FirstReducer";


const rootReducer = combineReducers({
  reducerGroupOne: combineReducers({
    FirstReducer,
  
  }),
  
});

export default rootReducer;
