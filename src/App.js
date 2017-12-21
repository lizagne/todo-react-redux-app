import React from 'react';
import './App.css';
import Header from "./components/Header";
import All from "./containers/All";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default App => (

	<Router>

		<div>
	    	<Header />
	    	<Route exact path="/" component={ All }/>
	  	</div>

 	</Router>

);


		    	// <Route exact path="/" component={ All }/>
