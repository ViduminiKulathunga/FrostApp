import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./reducers/dataReducer";
import uiReducer from "./reducers/uiReducer";

const inistialState = {};

const reducers = combineReducers({
  data: dataReducer,
  UI: uiReducer,
});

const store = createStore(reducers, inistialState, applyMiddleware(thunk));

export default store;
