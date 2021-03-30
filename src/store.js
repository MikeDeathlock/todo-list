import { createStore } from "redux";
import RootReducer from "./Reducers/rootReducer";

const store = createStore(RootReducer);
export default store;