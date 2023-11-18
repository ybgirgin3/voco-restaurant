import express from 'express';
import restaurants from './restaurants';
import menus from './menus';
import orders from './orders';

const router = express.Router();

router.use('/restaurants', restaurants);
router.use('/menus', menus);
router.use('/orders/', orders); // this part needs to be a part of user route

export default router;
