import { createStore, applyMiddleware } from "redux";
import rootReduser from "./reduser";
import thunk from "redux-thunk";

const store = createStore(rootReduser, applyMiddleware(thunk));

export default store;
