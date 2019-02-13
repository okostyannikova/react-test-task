import { createStore } from "redux";
import rootReduser from "./reduser";

const store = createStore(rootReduser);

export default store;
