import React from 'react';
import Priority from './Priority';

const Input = ({ onSubmit }) => {

	let input;

	return(
		<div>
			<form onSubmit={e => { onSubmit(input.value) }}>
				<input placeholder="task here"></input>
				<Priority />
				<button  type="submit" className="btn-primary" onClick={ this.handleClick.bind(this) }>Add Task</button>
			</form>
		</div>
	)
};

export default Input;