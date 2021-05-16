import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ICategories } from '../../interfaces';
import { apiService } from '../utils/api-services';

/* HOOK REACT EXAMPLE */
const Create = (props: CreateProps) => {
    const history = useHistory();
    const {id} = useParams<{id: string}>();
	const [categories, setCategories] = useState<ICategories[]>([]);
    
	const [categoryid, setCategoryid] = useState<string>('0');
    const handleSetCategoryid = (e: React.ChangeEvent<HTMLSelectElement>) => setCategoryid(e.target.value);
	const [title, setTitle] = useState<string>('');
    const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
	const [author, setAuthor] = useState<string>('');
    const handleSetAuthor = (e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value);
	const [price, setPrice] = useState<string>('');
    const handleSetPrice = (e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value);

	useEffect(() => {
        apiService(`/api/categories`)
        .then(categories => setCategories(categories))
	}, []);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService(`/api/books`, 'POST', {title, author, price, categoryid})
        .then(res => {
            history.push(`/details/${res.insertId}`)
        })
    };

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Create</h1>

            <select className='form-control' value={categoryid} onChange={handleSetCategoryid}>
                <option value="0">Select a Category</option>
                {categories?.map(category => (
                    <option key={`category-option-${category.id}`} value={category.id}>{category.name}</option>
                    
                ))}
            </select>

            <input value={title} onChange={handleSetTitle} placeholder='Title'/>
            <input value={author} onChange={handleSetAuthor} placeholder='Author'/>
            <input value={price} onChange={handleSetPrice} placeholder='Price'/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
            <br/>
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/books'>To Books</Link>
		</main>
	);
};

interface CreateProps {}

export default Create;