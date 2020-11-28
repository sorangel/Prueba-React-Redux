import { createStore, combineReducers } from "redux";
import globalReducer from "../reducers/globalReducer";

const rootReducers = combineReducers({
  global: globalReducer,
});

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
