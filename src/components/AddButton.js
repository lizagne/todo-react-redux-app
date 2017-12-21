import React, { Component } from 'react';

class AddButton extends Component {

	handleClick(){
		this.props.onClick();
	};

	render() {
		return (
		<button  className="btn-primary" onClick={this.handleClick.bind(this)}>
			Add Task
		</button>
		);
	}
}

export default AddButton;