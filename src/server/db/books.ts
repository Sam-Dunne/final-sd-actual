import { Query } from './index';
import { IBooks, ICategories } from '../../interfaces';

const all = () => Query<(IBooks & ICategories)[]>('SELECT books.id, books.categoryid, books.title, books.author, books.price, books._created, categories.name FROM books LEFT JOIN categories ON books.categoryid = categories.id');
const one = (id: string) => Query<(IBooks & ICategories)[]>('SELECT books.id, books.categoryid, books.title, books.author, books.price, books._created, categories.name FROM books LEFT JOIN categories ON books.categoryid = categories.id WHERE books.id = ?', [id]);
const insert = (newBook: IBooks) => Query('INSERT INTO books SET ?', [newBook]);
const update = (updatedBook: { title: string, author: string, price: number }, id: string) => Query('UPDATE books SET ? WHERE id = ?', [updatedBook, id]);
const nuke = (id: string) => Query('DELETE from books WHERE books.id = ?', [id]);

export default {
    all,
    one,
    insert,
    update,
    nuke,
}