import React from 'react';
import All from '../components/All';

import Input from "../components/Input";
import { connect } from 'react-redux';
import { displayTasks } from "../data/actions/api";

const mapStateToProps = state => {
	return {
		tasks: state.get("tasks"),
	};
};


const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(displayTasks()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(All);






