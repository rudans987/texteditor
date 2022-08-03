import {createStore, combineReducers} from "redux";
import til from "./modules/til"
const rootReducer = combineReducers({til});

const store =createStore(rootReducer);

export default store;