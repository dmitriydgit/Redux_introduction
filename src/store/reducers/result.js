import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

console.log(actionTypes)

const initialState = {
	results: []
}

const deleteResult = (state, action) => {
	const newArr = state.results.filter((res, index) => {
		return res.id !== action.resultElId
	})
	return updateObject(state, { results: newArr })
}

const resultReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return updateObject(state, { results: state.results.concat({ id: new Date(), val: action.result * 2 }) })
		case actionTypes.DELETE_RESULT:
			return deleteResult(state, action)
	}
	return state
}

export default resultReducer;