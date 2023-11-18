import express from 'express';
import { restaurantMock } from '../mocks';
import MessageResponse from '../../interfaces/MessageResponse';
import { DbService } from '../services';
import { Restaurant } from '../../interfaces/Restaurant';
import { ObjectId } from 'mongodb';
import { Inserted } from '../../interfaces/responses/insertedResponse';

// definitions
const router = express.Router();
const dbService = new DbService();

// get all restaurants
router.get<{}, MessageResponse>('/', async (req, res) => {
  try {
    const results: Restaurant[] = await dbService.readAllOrByFilter();
    res.json({
      message: 'restaurants list',
      response: { restaurantMock, ...results },
      status: 200,
    });
  } catch (error) {
    res.json({ message: 'No restaurant found', response: null, status: 404 });
  }
});

// create a restaurant
router.post<{}, MessageResponse>('/create', async (req, res) => {
  try {
    const doc: Restaurant = req.body;
    const result: Inserted = await dbService.create(doc).then(() => {
      let insertedDoc = dbService.readAllOrByFilter({
        _id: new ObjectId(result.insertedId),
      });
    });
    res.json({
      message: 'object created successfully',
      response: result,
      status: 201,
    });
  } catch (error) {
    res.json({ message: 'No restaurant found', response: null, status: 401 });
  }
});

export default router;
