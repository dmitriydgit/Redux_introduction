import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultReducer
})



const logger = store => {
	return next => {
		return action => {
			console.log('[midleware] Dispatching', action)
			const result = next(action);
			console.log('[midleware] next state', store.getState())
			return result;
		}
	}
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
