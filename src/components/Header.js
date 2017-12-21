//this is the first stateless functional component, only holds the presentation stuff.

import React from 'react';
import Input from './Input';

const Header = () => (
	<div>
		<h1> Bask in my Tasks </h1>
		<hr />
		<Input />
		<hr />
	</div>
);

export default Header;