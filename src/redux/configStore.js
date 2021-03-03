import { combineReducers, createStore } from "redux";
import { gameOanTuXiRedux } from "./reducers/GameOanTuXiRedux";

const configStore = combineReducers({
  gameOanTuXiRedux: gameOanTuXiRedux,
});

export const store = createStore(configStore);
