import React, { Component } from 'react';
import Input from '../components/Input';

const mapDispatchToProps = (dispatch) => {

	return {
		onSubmit:(text) => {
			dispatch(addItem(text))
		}
	}
}

let AddItem = connect(null, mapDispatchToProps)(Input);