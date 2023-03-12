import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer";
const { createStore, applyMiddleware } = require("redux");

//Middleware
const middleware = [thunk];

// Create Store
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

//export
export default store;
