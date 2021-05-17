import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { apiService } from '../utils/api-services';
import { IBookFull } from '../../interfaces';

/* HOOK REACT EXAMPLE */
const Details = (props: DetailsProps) => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<IBookFull>(null);


    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(book => setBook(book))
    }, [id]);

    return (
        <main className="container my-5">
            <h1 className="text-primary text-center">Details</h1>
                <div className="border">
                    <h4>{`Title: ${book?.title}`}</h4>
                    <h4>{`By: ${book?.author}`}</h4>
                    <h4>{`Category: ${book?.name}`}</h4>
                    <h4>{`$${book?.price}`}</h4>
                    <h4>{book?._created}</h4>
                    <br />
                    <Link to={`/edit/${book?.id}`}>To Edit Book</Link>
                    <br/>
                    <Link to={`/books`}>Back to Books</Link>
                </div>
        </main>
    );
};

interface DetailsProps { }

export default Details;