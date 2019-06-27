const redux = require('redux');
const createStore = redux.createStore;

const c = (props) => (console.log(props));

const initialState = {
	counter: 0
};

let rootReduser = function (state = initialState, action) {
	if (action.type === 'INC_COUNTER') {
		return {
			...state,
			counter: state.counter + 1
		}
	}
	if (action.type === 'ADD_COUNTER') {
		return {
			...state,
			counter: state.counter + action.value
		}
	}
	return state;
}

//store
const store = createStore(rootReduser);

console.log(store.getState());

//subscribtion
store.subscribe(() => {
	console.log('[Subscribtion]', store.getState())
})

//dispatching actions
store.dispatch({ type: 'INC_COUNTER' })
store.dispatch({ type: 'ADD_COUNTER', value: 10 })
c(store.getState());

