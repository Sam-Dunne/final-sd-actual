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
        apiService(`/api/books/${id}`, 'PUT', {title, author, price})
        .then(res => {
            history.push(`/details/${id}`)
        })
    };

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Edit</h1>
            <input value={title} onChange={handleSetTitle} />
            <input value={author} onChange={handleSetAuthor} />
            <input value={price} onChange={handleSetPrice} />
            <br/>
            <button onClick={handleSubmit}>Submit</button>
            <br/>
            <Link to='/books'>Back to Books</Link>
		</main>
	);
};

interface EditProps {}

export default Edit;