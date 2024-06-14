import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  products: productReducer,
  cart: basketReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
