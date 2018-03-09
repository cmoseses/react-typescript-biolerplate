import * as React from "react";
import * as ReactDOM from "react-dom";
import Cruise from "./components/Cruise";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { fromJS } from "immutable";
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Cruise />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
