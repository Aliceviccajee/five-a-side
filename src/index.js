import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import initial from "./Data/initial";
import reducer from "./Data/reducer";
import { Provider } from "react-redux";
//import { Router } from "react-router-dom";

const store = createStore(reducer, initial, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

ReactDOM.render(
    <Provider store={ store }>
		<App />
    </Provider>,
    document.getElementById("root"),
);
