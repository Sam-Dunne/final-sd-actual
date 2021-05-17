import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

/* HOOK REACT EXAMPLE */
const Home = (props: HomeProps) => {

    return (
        <main className="container my-5">
            <h1 className="text-primary text-center">Home</h1>
            <h4>It's a Landing page, yay!</h4>
            <Link to='/books'>To Books</Link>
            <br />
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/register'>Register</Link>
        </main>
    );
};

interface HomeProps { }

export default Home;