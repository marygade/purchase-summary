import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";

import {shallow} from 'enzyme';

import  {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PurchaseSummary from "../src/components/PurchaseSummary"
import rootReducer from "../src/reducers";

import "../src/styles.scss";

const store = createStore(rootReducer);
const rootElement = document.getElementById("root");

const mapStateToProps = state => state;

const PurchaseSummaryContainer = connect(mapStateToProps)(PurchaseSummary);

configure({ adapter : new Adapter()});

it('renders without crashing', () => {
  shallow(
  <Provider store={store}>
    <PurchaseSummaryContainer />
  </Provider>
  );
});