import * as React from 'react';
import { NavLink } from 'react-router-dom';


/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

    return (
        <nav className="navbar">
            <h4>BookFair</h4>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/books'>Books</NavLink>
            <NavLink to='/create'>Create Book</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </nav>
    );
};

interface AppProps { }

export default App;