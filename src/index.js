import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";

import PurchaseSummary from "./components/PurchaseSummary"
import rootReducer from "./reducers";

import "./styles.scss";

const store = createStore(rootReducer);
const rootElement = document.getElementById("root");

const mapStateToProps = state => state;

const PurchaseSummaryContainer = connect(mapStateToProps)(PurchaseSummary);

ReactDOM.render(
  <Provider store={store}>
    <PurchaseSummaryContainer />
  </Provider>,
  rootElement
);
