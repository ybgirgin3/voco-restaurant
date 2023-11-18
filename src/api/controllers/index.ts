import express from 'express';
import restaurants from './restaurants';

const router = express.Router();

router.use('/restaurants', restaurants);

export default router;
