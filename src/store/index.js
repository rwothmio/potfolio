import { createStore } from "redux";
import currentPageReducer from "./reducer";

const store = createStore(currentPageReducer);

export default store;
