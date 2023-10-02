import { legacy_createStore as createStore } from "redux";
import commonReducer from "./reducers";

const store = createStore(commonReducer);

export default store;
