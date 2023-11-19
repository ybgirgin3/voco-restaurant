import express from 'express';
import MessageResponse from '../../interfaces/MessageResponse';
import { DbService } from '../services';
import { Restaurant } from '../../interfaces/Restaurant';
import { ObjectId } from 'mongodb';

// definitions
const router = express.Router();
// create a `restaurants` db session
const dbService = new DbService('restaurants');

// get all restaurants
router.get<{}, MessageResponse>('/', async (req, res) => {
  try {
    const results: Restaurant[] = await dbService.readAllOrByFilter();
    res.json({
      message: 'restaurants list',
      response: results,
      status: 200,
    });
  } catch (error) {
    res.json({ message: 'No restaurant found', response: null, status: 404 });
  }
});

// create a restaurant
router.post<{}, MessageResponse>('/create', async (req, res) => {
  try {
    // get body
    const doc = req.body;
    console.log('doc in restaurant create', doc);

    // create object
    const result = await dbService.create(doc);

    // inserted one
    const insertedOne = await dbService.readAllOrByFilter({
      _id: new ObjectId(result.insertedId),
    });
    console.log('inserted rest', insertedOne);

    res.json({
      message: 'object created successfully',
      response: insertedOne,
      status: 201,
    });
  } catch (error) {
    res.json({ message: 'No restaurant found', response: null, status: 401 });
  }
});

export default router;
