import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import Navbar from './components/Navbar';
import Books from './views/Books';
import Create from './views/Create';
import Details from './views/Details';
import Edit from './views/Edit';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/books'>
					<Books />
				</Route>
				<Route exact path='/details/:id'>
					<Details />
				</Route>
				<PrivateRoute exact path='/edit/:id'>
					<Edit />
				</PrivateRoute>
				<PrivateRoute exact path='/create'>
					<Create />
				</PrivateRoute>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps { }

export default App;
