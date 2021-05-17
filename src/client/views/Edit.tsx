import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { setSyntheticLeadingComments } from 'typescript';
import { apiService } from '../utils/api-services';

/* HOOK REACT EXAMPLE */
const Edit = (props: EditProps) => {
    const history = useHistory();
    const {id} = useParams<{id: string}>();
	const [title, setTitle] = useState<string>('');
    const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
	const [author, setAuthor] = useState<string>('');
    const handleSetAuthor = (e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value);
	const [price, setPrice] = useState<string>('');
    const handleSetPrice = (e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value);

	useEffect(() => {
        apiService(`/api/books/${id}`)
        .then(book => {
            setTitle(book?.title);
            setAuthor(book?.author);
            setPrice(book?.price);
        })
	}, [id]);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (title.length === 0 || author.length === 0 || price.length === 0) {
            alert(`All fields are required`);
            return;
        }
        if ( price.length > 5 ) {
            alert(`Max value: 99.99`);
            return;
        }
        apiService(`/api/books/${id}`, 'PUT', {title, author, price})
        .then(res => {
            history.push(`/details/${id}`)
        })
    };

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService(`/api/books/${id}`, 'DELETE')
        .then(res => {
            history.push(`/books`)
        })
    };

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Edit</h1>
            <label >Title:</label>
            <input value={title} onChange={handleSetTitle} />
            <br/>
            <label >Author:</label>
            <input value={author} onChange={handleSetAuthor} />
            <br/>
            <label >Price:</label>
            <input value={price} onChange={handleSetPrice} />
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit Edit</button>
            <br/>
            <button onClick={handleDelete}>Delete Book</button>
            <br/>
            <Link to='/books'>Back to Books</Link>
		</main>
	);
};

interface EditProps {}

export default Edit;