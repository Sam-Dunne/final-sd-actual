import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { apiService } from '../utils/api-services';
import { IBookFull } from '../../interfaces';

/* HOOK REACT EXAMPLE */
const Books = (props: BooksProps) => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [books, setBooks] = useState<IBookFull[]>([]);


    useEffect(() => {
        apiService('/api/books')
            .then(books => setBooks(books))
    }, []);

    return (
        <main className="container my-5">
            <h1 className="text-primary text-center">Books</h1>
            {books?.map(book => (
                <div key={book.id} className="border">
                    <h4>{`Title: ${book.title}`}</h4>
                    <h4>{`By: ${book.author}`}</h4>
                    <h4>{`Category: ${book.name}`}</h4>
                    <br />
                    <Link to={`/details/${book.id}`}>To Book Details</Link>
                </div>
            ))}

        </main>
    );
};

interface BooksProps { }

export default Books;