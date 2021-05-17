import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res, next) => {
    const id = req.params.id;
    const x = req.body;
    try {
        const allCats = await db.categories.all();
        res.json(allCats);
    } catch (error) {
        res.json(error);
    }
});

export default router;