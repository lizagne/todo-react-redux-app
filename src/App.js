import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import All from "./containers/All";
import Completed from './containers/Completed';
import Incomplete from './containers/Incomplete';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default App => (

	<Router>

		<div>
	    	<Header />
	    	<Route exact path="/" component={ All }/>
	    	<Route path="/incomplete" component={ Incomplete }/>
	    	<Route path="/completed" component={ Completed }/>
	  	</div>

 	</Router>

);


		    	// <Route exact path="/" component={ All }/>
