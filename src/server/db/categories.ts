import { Query } from './index';
import { ICategories } from '../../interfaces';

const all = () => Query<ICategories[]>('SELECT * FROM Categories');


export default {
    all,
}