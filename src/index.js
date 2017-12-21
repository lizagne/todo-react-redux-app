import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './data/reducer';
import initial from './data/initial';

import thunk from "redux-thunk";


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
	reducer,
	initial,
	composeEnhancers(applyMiddleware(thunk)),
	window._REDUX_DEVTOOLS_EXTENSION_&&window._REDUX_DEVTOOLS_EXTENSION_(),
);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

