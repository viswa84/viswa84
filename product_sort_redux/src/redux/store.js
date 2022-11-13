import { legacy_createStore, applyMiddleware, compose, } from "redux";
import thunk from "redux-thunk";
import { reduser } from "./reduser";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  reduser,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
