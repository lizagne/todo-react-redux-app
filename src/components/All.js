import React, { Component } from 'react';
import ListItem from './ListItem';
import { Link } from "react-router-dom";
import { AddButton } from './AddButton';

class All extends Component {

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		const { tasks } = this.props;
		return (
			<div>
			{ tasks.count() ? 
				<ul className="list-group">
				{ tasks.map(task => (
					<li className="list-group-item" key={ task.get("id") }>
						<Link to={ "/tasks/" + task.get("id") }>{ task.get("task") }</Link>
					</li>

					))}
				</ul>
				:
				<p>You have nothing to do</p>
			}
			</div>
		);
	}
}

export default All;