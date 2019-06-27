import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';


class Counter extends Component {


	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
				<CounterControl label="Add 5" clicked={this.props.onAddCounter} />
				<CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
				<hr />
				<button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
				<ul>
					{this.props.storedResults.map(strResult => {
						return <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}> {strResult.val} </li>

					})}


				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.ctr.counter,
		storedResults: state.res.results
	}

}

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch(actionCreators.increment()),
		onDecrementCounter: () => dispatch(actionCreators.decrement()),
		onAddCounter: () => dispatch(actionCreators.add(5)),
		onSubtractCounter: () => dispatch(actionCreators.sub(5)),
		onStoreResult: (result) => dispatch(actionCreators.store_result(result)),
		onDeleteResult: (id) => dispatch(actionCreators.delete_result(id))

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);