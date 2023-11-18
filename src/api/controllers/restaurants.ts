import express from 'express';
import { restaurantMock } from '../mocks';

import MessageResponse from '../../interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'restaurants list',
    response: restaurantMock,
  });
});

export default router;
