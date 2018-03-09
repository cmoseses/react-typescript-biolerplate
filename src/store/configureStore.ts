import { createStore } from "redux";
import rootReducer from "../ducks";
import { Map } from "immutable";

export default () => {
  const store = createStore<{}>(rootReducer, Map({}));
  return store;
}
