import * as actionTypes from './actions/actionTypes';

console.log(actionTypes)

const initialState = {
	counter: 0,
	results: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			const newState = Object.assign({}, state);
			newState.counter = state.counter + 1;
			return newState;
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}
		case actionTypes.ADD:
			return {
				...state,
				counter: state.counter + action.value
			}
		case actionTypes.SUB:
			return {
				...state,
				counter: state.counter - action.value
			}
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: new Date(), val: state.counter })
			}
		case actionTypes.DELETE_RESULT:
			// const id = 2;
			// const newArr = [...state.results]
			// newArr.splice(id, 1)
			const newArr = state.results.filter((res, index) => {
				return res.id !== action.resultElId
			})
			return {
				...state,
				results: newArr
			}


	}
	return state
	// if (action.type === 'INCREMENT') {


	// 	return {
	// 		counter: state.counter + 1
	// 	}
	// }
	// if (action.type === 'DECREMENT') {
	// 	return {
	// 		counter: state.counter - 1
	// 	}
	// }
	// if (action.type === 'ADD') {
	// 	return {
	// 		counter: state.counter + action.value
	// 	}
	// }
	// if (action.type === 'SUB') {
	// 	return {
	// 		counter: state.counter - action.value
	// 	}
	// }

}

export default reducer;